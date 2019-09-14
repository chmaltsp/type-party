import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddSite from './pages/AddSite';
import AddTypeface from './pages/AddTypeface';
// import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';

import Footer from './components/Footer';
import Header from './components/Header';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

// Inject global styles
import './styles/global';

import ProtectedRoute from './components/ProtectedRoute';
import Directory from './pages/Directory';
import Typeface from './pages/Typeface';
import Website from './pages/Website';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/site/:slug" component={Website} />
        <Route exact={true} path="/typeface/:slug" component={Typeface} />
        <Route exact={true} path="/directory" component={Directory} />
        <ProtectedRoute exact={true} path="/add-site" component={AddSite} />
        <ProtectedRoute exact={true} path="/add-site/:slug" component={AddSite} />
        <ProtectedRoute exact={true} path="/add-typeface" component={AddTypeface} />
        <Route exact={true} path="/login" component={Login} />
      </Switch>
      <Footer />
    </>
  </ThemeProvider>
);

export default App;
