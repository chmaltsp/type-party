import { createUploadLink } from 'apollo-upload-client';

import { ApolloClient } from 'apollo-client';

import { InMemoryCache } from 'apollo-cache-inmemory';

import { withClientState } from 'apollo-link-state';

import { getToken, removeToken } from './auth';

import { setContext } from 'apollo-link-context';

import { onError } from 'apollo-link-error';

import { ServerError } from 'apollo-link-http-common';

import { AUTH_STATUS } from '../components/ProtectedRoute/query';

import { ApolloLink } from 'apollo-link';
import isWindowDefined from './isWindowDefined';

import { runtimeConfig } from '../config';

export const createClient = () => {
  const uri = runtimeConfig.apiUrl || 'https://api.typeparty.com';

  const uploadLink = createUploadLink({
    fetch,
    uri,
  });

  const appCache = new InMemoryCache().restore(
    isWindowDefined && (window as any).__APOLLO_STATE__
  );

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

  const errorLink = onError(({ networkError, operation, forward }) => {
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
        const oldHeaders = operation.getContext().headers;
        delete oldHeaders.Authorization;
        operation.setContext({
          ...oldHeaders,
        });
        return forward(operation);
      }
      return forward(operation);
    }
    return forward(operation);
  });

  const link = ApolloLink.from([authLink, stateLink, errorLink, uploadLink]);

  const client = new ApolloClient({
    cache: appCache,
    link,
    resolvers: {},
    ssrMode: !isWindowDefined,
  });

  return client;
};
