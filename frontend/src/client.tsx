import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';

const link = new HttpLink({
  uri: process.env.API_URL || 'https://tp-backend-zocaxqjnyl.now.sh',
});
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
