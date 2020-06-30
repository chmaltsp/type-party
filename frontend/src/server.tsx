import express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import 'cross-fetch/polyfill';

import { resetIdCounter } from 'downshift';

import { ApolloProvider, getDataFromTree } from 'react-apollo';

import { ServerStyleSheet } from 'styled-components';

import App from './App';
import { runtimeConfig } from './config';
import { createClient } from './utils/apolloClient';

import basicAuth from 'express-basic-auth';

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

if (!process.env.BASIC_AUTH) {
  throw new Error('BASIC AUTH MISSING');
}

const basicAuthUsers = {
  tp: process.env.BASIC_AUTH,
};

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use((req, res, next) => {
    if (req.path === '/health') {
      next();
    } else {
      basicAuth({
        challenge: true,
        realm: 'tprealm',
        users: basicAuthUsers,
      })(req, res, next);
    }
  })
  .get('/health', (req, res, next) => {
    res.sendStatus(200);
  })
  .get('/*', (req: express.Request, res: express.Response) => {
    const context = {};

    const client = createClient();

    // Set up SSR + Styled Components
    const sheet = new ServerStyleSheet();
    sheet.collectStyles(<App />);

    const styleTags = sheet.getStyleTags();
    // Necessary for downshift to work in SSR
    // https://github.com/paypal/downshift#resetidcounter
    resetIdCounter();

    const RenderedApp = (
      <ApolloProvider client={client}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    );

    console.log(assets);
    getDataFromTree(RenderedApp).then(() => {
      const markup = renderToString(RenderedApp);
      // tslint:disable: max-line-length
      res.send(
        `<!doctype html>
        <html lang="">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>Type Party</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
            ${styleTags}
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
              <link href="${assets.client.css}" rel="stylesheet" />
              <script>
                 window.__APOLLO_STATE__ = ${JSON.stringify(client.extract())};
              </script>
              <script>window.env = ${JSON.stringify(runtimeConfig)};</script> 
        </head>
        <body>
            <div id="root">${markup}</div>
        </body>
    </html>`
      );
    });
  });

export default server;
