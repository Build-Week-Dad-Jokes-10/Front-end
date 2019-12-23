import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import HomePage from './components/HomePage';
import Login from './components/Login';
import PrivateRoute from './utils/PrivateRoute';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <PrivateRoute exact path='/' component={HomePage} /> */}
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
