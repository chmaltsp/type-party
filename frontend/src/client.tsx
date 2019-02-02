import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import App from './App';

import ScrollToTop from './components/ScrollToTop';
import { createClient } from './utils/apolloClient';

const client = createClient();

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
