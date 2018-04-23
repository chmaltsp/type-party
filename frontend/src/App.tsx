import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddSite from './pages/AddSite';
import Landing from './pages/Landing';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

// Inject global styles
import './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact={true} path="/" component={Landing} />
      <Route exact={true} path="/add-site" component={AddSite} />
    </Switch>
  </ThemeProvider>
);

export default App;
