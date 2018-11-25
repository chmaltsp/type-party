import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { InMemoryCache } from 'apollo-boost';

import { ApolloClient } from 'apollo-client';

import { setContext } from 'apollo-link-context';

// @ts-ignore
import { createUploadLink } from 'apollo-upload-client';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const uri = process.env.RAZZLE_API_URL || 'https://tp-backend-zocaxqjnyl.now.sh';

const uploadLink = createUploadLink({
  fetch,
  uri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('tpt');

  const allHeaders = {
    ...headers,
  };

  if (token) {
    allHeaders.Authorization = token ? `Bearer ${token}` : null;
  }
  return allHeaders;
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(uploadLink),
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
