import React, {useEffect, useState, useContext } from 'react';

import dummyData from '../temporary data/dummyData';
import SearchBar from './SearchBar';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../authentication/axiosWithAuth'

import { SelectedRecipeContext } from '../contexts/SelectedRecipeContext';

function Dashboard() {
    const { push } = useHistory();
    const { selectRecipe } = useContext(SelectedRecipeContext)
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axiosWithAuth()
        .get('/api/recipes')
        .then(resp => {
            setRecipes(resp.data)
            console.log(resp)
        }).catch(err => console.error(err))
    }, [])

    const specificRecipe = (term) => {
        setSearch(term)
    }

  return(
      <div className='dashboard'>
          <h2>Search for Secret Recipes!</h2>
          <SearchBar specificRecipe={specificRecipe} recipes={recipes}/>
          <div className='dashboard-container'>
          {recipes.filter(item => {
              const searchByName = item.recipe_name.toLowerCase().includes(search.toLowerCase())
              const searchByPerson = item.source_name.toLowerCase().includes(search.toLowerCase())

              if(search === ''){
                  return item
              } else if(searchByName || searchByPerson){
                  return item
              }
          }).map(recipe => {
              return <div  className='recipe-cards' key={recipe.recipe_name}>
                  <h3>{recipe.source_name}'s {recipe.recipe_name}</h3>
                  <img src='https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
              </div>
          })}
        </div>
      </div>
  );
}

export default Dashboard;
