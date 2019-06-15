import React from 'react';

import { Switch, Route } from 'react-router-dom'
import { withRouter } from "react-router";
import './App.css';
import routes from './router/index.js'
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props =>  {
        return(
        
        // pass the sub-routes down to keep nesting
        <route.component  {...props} routes={route.routes} />
      )}}
    />
  );
}

function App() {
  return (
    <Switch>
   {
       routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
      ))

   }
  </Switch>

  );
}

export default withRouter(App);
