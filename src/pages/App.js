import React, { useEffect } from 'react';
import { Route, Switch } from "react-router";
import Home from "./Home";
import Profile from './Profile';
import Login from "./Login";

const App = () => {

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          console.log('logged')
        }
      } catch (e) {
        console.log(e)
      }
    };
    initialize();
  }, [])

  return (
    <Switch>
      <Route exact path='/' component={() => (<Home/>)}/>
      <Route path='/profile' component={() => <Profile/>}/>
      <Route path='/login' component={() => <Login/>}/>
    </Switch>

  )
}

export default App;