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

    useEffect(() => {
        axiosWithAuth()
        .get('/api/recipes')
        .then(resp => {
            setRecipes(resp.data)
        }).catch(err => console.error(err))
    }, [])

    // const handleClick = () => {
    //     console.log(recipe);
    // }
   
    // selectedRecipe && push(`recipe/${selectedRecipe}`);
  return(
      <div className='dashboard'>
          <h2>Search for Secret Recipes!</h2>
          <SearchBar />
          <div className='dashboard-container'>
          {recipes.map(recipe => {
              const handleClick = () => {
                selectRecipe(recipe);
                push(`recipe/${recipe.recipe_id}`);
              }
              return <div 
                onClick={handleClick} className='recipe-cards' key={recipe.recipe_name}>
                  <h3>{recipe.source_name}'s {recipe.recipe_name}</h3>
                  <img src='https://i.picsum.photos/id/446/300/300.jpg?hmac=U2WhK6U8yn7l_qR3SrFEVKcSaKkhedtxw25vBlFEges' alt='https://i.picsum.photos/id/446/300/300.jpg?hmac=U2WhK6U8yn7l_qR3SrFEVKcSaKkhedtxw25vBlFEges' />
              </div>
          })}
        </div>
      </div>
  );
}

export default Dashboard;
