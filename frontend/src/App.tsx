import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import AddSite from './pages/AddSite';

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/add-site" component={AddSite} />
  </Switch>
);

export default App;
