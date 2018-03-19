// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Forum from './components/Forum';
import Page404 from './components/Page404';

const AppRoutes = () =>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/forum" component={Forum} />
        <Route component={Page404} />
    	</Switch>
    </App>;

    export default AppRoutes;