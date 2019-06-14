import React from 'react';

import { Switch, Route } from 'react-router-dom'
import './App.css';
import routes from './router/index.js'
function App() {
  return (
    <Switch>
    <Route exact path="/" component={Home}/>
   
  </Switch>

  );
}

export default App;
