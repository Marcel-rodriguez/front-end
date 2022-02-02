import Header from './components/Header';
import './App.css';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import Register from './components/Register';
import RecipeForm from './components/RecipeForm';

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Dashboard from './components/Dashboard';
import React, {useEffect, useState} from 'react'

import {LoggedInContext} from './contexts/LoggedInContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true)
    }  
  }, [])

  return (
    <div className="App">
        <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
          <Header />
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/logout' component={Logout} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/recipeform' component={RecipeForm} />
            <Route component={NotFound}/>
          </Switch>
        </LoggedInContext.Provider>
    </div>
  );
}

export default App;