import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddSite from './pages/AddSite';
import AddTypeface from './pages/AddTypeface';
// import Landing from './pages/Landing';
import Home from './pages/Home';

import Footer from './components/Footer';
import Header from './components/Header';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

// Inject global styles
import './styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/add-site" component={AddSite} />
        <Route exact={true} path="/add-typeface" component={AddTypeface} />
      </Switch>
      <Footer />
    </>
  </ThemeProvider>
);

export default App;
