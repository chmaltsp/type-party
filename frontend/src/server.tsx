import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import 'cross-fetch/polyfill';

import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

// @ts-ignore
import { createUploadLink } from 'apollo-upload-client';

import { concat } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import { ServerStyleSheet } from 'styled-components';

import App from './App';

const uri = process.env.RAZZLE_API_URL || 'https://tp-backend-zocaxqjnyl.now.sh';

const link = createUploadLink({
  fetch,
  uri,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  // @ts-ignore
  ssrMode: true,
});

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

    // Set up SSR + Styled Components
    const sheet = new ServerStyleSheet();
    sheet.collectStyles(<App />);

    const styleTags = sheet.getStyleTags();
    const markup = renderToString(
      <ApolloProvider client={client}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    );
    res.send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Razzle TypeScript</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${styleTags}
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
    );
  });

export default server;
