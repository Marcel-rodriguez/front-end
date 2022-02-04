import Header from './components/Header';
import './App.css';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import Register from './components/Register';
import RecipeForm from './components/RecipeForm';
import ViewRecipe from './components/ViewRecipe';

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Dashboard from './components/Dashboard';
import React, {useEffect, useState} from 'react'

import {LoggedInContext} from './contexts/LoggedInContext';
import { SelectedRecipeContext } from './contexts/SelectedRecipeContext';
import {RecipesContext} from './contexts/RecipesContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoggedIn(true)
    }  
  }, [])

  const selectRecipe = id => {
    setSelectedRecipe(id);
  }

  return (
    <div className="App">
        <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
          <SelectedRecipeContext.Provider value={{selectedRecipe, setSelectedRecipe}}>
            <RecipesContext.Provider value={{recipes,setRecipes}}>
            <Header />
            <Switch>
              <Route path='/recipe/:id' component={ViewRecipe}/>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/logout' component={Logout} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute exact path='/recipeform' component={RecipeForm} />
              <Route exact path='/' component={Login} />
              <Route component={NotFound}/>
            </Switch>
            </RecipesContext.Provider>
          </SelectedRecipeContext.Provider>
        </LoggedInContext.Provider>
    </div>
  );
}

export default App;