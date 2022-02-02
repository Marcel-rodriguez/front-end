import React, { useState, useEffect } from 'react';
import dummyData from '../temporary data/dummyData';
import axiosWithAuth from '../authentication/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';


function ViewRecipe(props) {
  const { recipeId } = props;
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
  
  const handleEdit = e => {
    e.preventDeafult();
    return <EditRecipeForm recipeId={recipeId} />
  }



  return(
    //buttons to edit and delete recipe
    //recipe scaffolding
      <div>
          <h1>Recipe</h1>
      </div>
  );
}

export default ViewRecipe;
