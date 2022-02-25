import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../authentication/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import { SelectedRecipeContext } from '../contexts/SelectedRecipeContext';
import { RecipesContext } from '../contexts/RecipesContext';

function ViewRecipe(props) {
  const { selectedRecipe, setSelectedRecipe } = useContext(SelectedRecipeContext)
  const {setRecipe} = useContext(RecipesContext)
  const [editing, setEditing] = useState(false)
  const {id} = useParams()

  const { push } = useHistory();

// get current recipe

  useEffect(() => {
    axiosWithAuth()
        .get(`/api/recipes/${id}`)
        .then(resp => {
            setSelectedRecipe(resp.data[0])
        }).catch(err => {
            console.error(err);
        })
}, [])
  
  const handleEdit = () => {
    !editing ? setEditing(true) : setEditing(false)
  }

  const handleDelete = () => {
    axiosWithAuth()
    .delete(`/api/recipes/${selectedRecipe.recipe_id}`)
    .then(resp => {
    }).catch(err => console.error(err))
    push('/dashboard')
  }

  // console.log('ViewRecipe',recipe)

  const rec = selectedRecipe
  const instructionArray = rec.recipe_instructions.split(',')


  return(
    //buttons to edit and delete recipe
    //recipe scaffolding
      <div className='viewRecipeContainer'>
          <div className='viewRecipeCard'>
          <div className='recipe-card'>
          <h2>{rec.source_name}'s {rec.recipe_name}</h2>
          <img src={rec.recipe_img_url ? rec.recipe_img_url : 'https://picsum.photos/536/354' } />
          <p>Type: {rec.category_name}</p>
          </div>
          <div className='ingredients'>
          <h2>Ingredients</h2>
          <p>{rec.recipe_ingredients}</p>
          </div>
          <div className='instructions'>
          <h2>Instructions</h2>
          <ol>{instructionArray.map(instruction => {
            return <li>{instruction}</li>
          })}</ol>
          </div>
          <div className='viewRecipeButtons'>
          <button onClick={handleEdit} className='editButton'>Edit</button>
          <button onClick={handleDelete} className='deleteButton'>Delete</button>
          </div>
          </div>
          <div className='editRecipeContainer'>
            {editing && <EditRecipeForm setEditing={setEditing}/>}
          </div>
      </div>
  );
}

export default ViewRecipe;
