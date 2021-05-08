import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login'
import Preferences from '../Preferences/Preferences';

function App() {

  if (1 + 1 === 3) {
    return <Login setToken={console.log()} />
  }


  return (
    <div className="wrapper">
      <h1>My Planner</h1>
      <a href='./dashboard'><h3>Dashboard</h3></a>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
      <a href = '/'><h5>Log out</h5></a>
    </div>
  );
}

export default App;