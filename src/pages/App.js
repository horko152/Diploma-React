import React from 'react';
import { Route, Switch } from "react-router";
import Home from "./Home";
import Profile from './Profile';
import Login from "./Login";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={() => (<Home/>) }/>
      <Route path='/profile' component={() => <Profile/>}/>
      <Route path='/login' component={() => <Login/>}/>
    </Switch>

  )
}

export default App;