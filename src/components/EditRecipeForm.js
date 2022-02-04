import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../authentication/axiosWithAuth';
import "../styles/recipeForm.css"
import { SelectedRecipeContext } from '../contexts/SelectedRecipeContext';
import { useHistory } from 'react-router-dom';

const initialRecipe = {
    recipe_id: 0,
    recipe_name: '',
    source_name: '',
    recipe_ingredients: [],
    recipe_instructions: '',
    category_name: '',
    recipe_img_url: '',
}

const EditRecipeForm = ({setEditing}) => {
    const [recipe, setRecipe] = useState(initialRecipe)
    const { selectedRecipe, setSelectedRecipe } = useContext(SelectedRecipeContext)
    const {push} = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get(`api/recipes/${selectedRecipe.recipe_id}`)
        .then(resp => {
            setRecipe(resp.data[0])
        }).catch(err => console.error(err))
    },[])

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`api/recipes/${selectedRecipe.recipe_id}`, recipe)
        .then(resp => {
            setSelectedRecipe(resp.data[0])
        }).catch(err => console.error(err))
        setEditing(false)
        push(`/recipe/${selectedRecipe.recipe_id}`)
        
    }
    
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Editing {recipe.recipe_name}</h1>
                <div className='formInput'>
                    <label>Title</label>
                    <input value={recipe.recipe_name} id="title" name="recipe_name" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>Family Member</label>
                    <input value={recipe.source_name} id="familyMember" name="source_name" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>ingredients</label>
                    <input value={recipe.recipe_ingredients} id="ingredients" name="recipe_ingredients" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>Instructions</label>
                    <input value={recipe.recipe_instructions} id="instructions" name="recipe_instructions" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>Category</label>
                    <input value={recipe.category_name} id="category" name="category_name" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label >Image</label>
                    <input type="text" value={recipe.recipe_img_url} id="image" name="recipe_img_url" onChange={handleChange} />
                </div>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
  </div>);
}

export default EditRecipeForm;
