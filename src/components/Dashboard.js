import React, {useEffect, useState, useContext } from 'react';

import SearchBar from './SearchBar';
import { useHistory } from 'react-router-dom';

import axiosWithAuth from '../authentication/axiosWithAuth'

import { SelectedRecipeContext } from '../contexts/SelectedRecipeContext';
import {RecipesContext} from '../contexts/RecipesContext'

function Dashboard() {
    const { push } = useHistory();
    const { setSelectedRecipe } = useContext(SelectedRecipeContext)
    const { recipes, setRecipes } = useContext(RecipesContext)
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

    const handleViewRecipe = (e, item) => {
        e.preventDefault()
        console.log(item.recipe_id)
        setSelectedRecipe(item)
        push(`/recipe/${item.recipe_id}`)
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
              return <div onClick={(e) => handleViewRecipe(e, recipe)} className='recipe-cards' key={recipe.recipe_id}>
              <h3>{recipe.source_name}'s {recipe.recipe_name}</h3>
              <img src={recipe.recipe_img_url ? recipe.recipe_img_url : 'https://picsum.photos/536/354' }/>
          </div>
          })}
        </div>
      </div>
  );
}

export default Dashboard;
