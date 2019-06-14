import React from 'react';

import { Switch, Route } from 'react-router-dom'
import './App.css';
import routes from './router/index.js'
function App() {
  return (
    <Switch>
   {
      routes.map((route,index)=>{
         return <Route path={route.path}   key={index} component={route.component} />
      })

   }
  </Switch>

  );
}

export default App;
