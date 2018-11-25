import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { InMemoryCache } from 'apollo-boost';

import { ApolloClient } from 'apollo-client';

// @ts-ignore
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const uri = process.env.RAZZLE_API_URL || 'https://tp-backend-zocaxqjnyl.now.sh';

const link = createUploadLink({
  fetch,
  uri,
});

const uploadLink = createUploadLink({ uri });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
