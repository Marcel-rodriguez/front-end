import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../authentication/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import { SelectedRecipeContext } from '../contexts/SelectedRecipeContext';

function ViewRecipe(props) {
  const { selectedRecipe } = useContext(SelectedRecipeContext)
  const [editing, setEditing] = useState(false)

  const { push } = useHistory();

//get current recipe

//   useEffect(() => {
//     axiosWithAuth()
//         .get(`/recipes/${recipeId}`)
//         .then(resp => {
//             console.log(resp);
//         }).catch(err => {
//             console.log(err);
//         })
// }, [])
  
  // const handleEdit = e => {
  //   e.preventDeafult();
  //   return <EditRecipeForm recipeId={recipeId} />
  // }


  console.log(selectedRecipe)
  return(
    //buttons to edit and delete recipe
    //recipe scaffolding
      <div>
          <h1>{selectedRecipe.recipe_name}</h1>
          <p>{selectedRecipe.recipe_instructions}</p>
      </div>
  );
}

export default ViewRecipe;
