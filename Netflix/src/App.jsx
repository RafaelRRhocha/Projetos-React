import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/home" component={ Home } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App
