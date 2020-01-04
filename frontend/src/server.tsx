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

let assets: any;

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
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

    getDataFromTree(RenderedApp).then(() => {
      const markup = renderToString(RenderedApp);
      res.send(
        `<!doctype html>
        <html lang="">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>Type Party</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Muli:400,600,700" rel="stylesheet">
            ${styleTags}
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
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
