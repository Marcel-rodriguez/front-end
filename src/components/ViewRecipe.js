import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../authentication/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import { SelectedRecipeContext } from '../contexts/SelectedRecipeContext';

function ViewRecipe() {
  const { selectedRecipe } = useContext(SelectedRecipeContext)
  const [recipe, setRecipe] = useState({})
  const [editing, setEditing] = useState(false)

  const { push } = useHistory();

// get current recipe

  useEffect(() => {
    axiosWithAuth()
        .get(`/api/recipes/${selectedRecipe.recipe_id}`)
        .then(resp => {
            console.log(resp);
            setRecipe(resp.data)
        }).catch(err => {
            console.log(err);
        })
    console.log(selectedRecipe)
}, [])
  
  const handleEdit = e => {
    e.preventDeafult();
    return <EditRecipeForm />
  }


  console.log(selectedRecipe)
  return(
    //buttons to edit and delete recipe
    //recipe scaffolding
      <div>
          <h1>Recipe!</h1>
          <p>{recipe.source_name}</p>
      </div>
  );
}

export default ViewRecipe;
