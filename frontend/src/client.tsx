import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { ApolloLink } from 'apollo-boost';

import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloClient } from 'apollo-client';

import { setContext } from 'apollo-link-context';

import { withClientState } from 'apollo-link-state';

// @ts-ignore
import { onError } from 'apollo-link-error';

import { createUploadLink } from 'apollo-upload-client';

import { ServerError } from 'apollo-link-http-common';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import { AUTH_STATUS } from './components/ProtectedRoute/query';
import { getToken, removeToken } from './utils/auth';

const uri = process.env.RAZZLE_API_URL || 'https://tp-backend-zocaxqjnyl.now.sh';

const uploadLink = createUploadLink({
  fetch,
  uri,
});

const appCache = new InMemoryCache();

const stateLink = withClientState({
  cache: appCache,
  defaults: {
    auth: {
      __typename: 'Auth',
      loggedIn: getToken() ? true : false,
    },
  },
  resolvers: {},
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();

  const allHeaders = {
    ...headers,
  };

  if (token) {
    allHeaders.Authorization = token ? `Bearer ${token}` : null;
  }

  return { headers: allHeaders };
});

const errorLink = onError(
  ({ networkError, graphQLErrors, response, operation, forward }) => {
    if (networkError) {
      const error = networkError as ServerError;

      if (error.statusCode === 401) {
        appCache.writeQuery({
          data: {
            auth: {
              __typename: 'Auth',
              loggedIn: false,
            },
          },
          query: AUTH_STATUS,
        });

        // Clear JWT
        removeToken();

        // Retry the request after deleting token... may be janky but works for now.
        // const oldHeaders = operation.getContext().headers;
        // delete oldHeaders.Authorization;
        // operation.setContext({
        //   ...oldHeaders,
        // });
        // return forward(operation);
      }
    }
  }
);

const link = ApolloLink.from([authLink, stateLink, errorLink, uploadLink]);

const client = new ApolloClient({
  cache: appCache,
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
