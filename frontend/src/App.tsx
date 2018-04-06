import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddSite from './pages/AddSite';
import Home from './pages/Home';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/add-site" component={AddSite} />
    </Switch>
  </ThemeProvider>
);

export default App;
