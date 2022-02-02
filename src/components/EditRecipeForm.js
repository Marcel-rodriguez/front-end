import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../authentication/axiosWithAuth';
import "../styles/recipeForm.css"

const initialRecipe = {
    id: 0,
    title: '',
    familyMember: '',
    ingredients: [],
    instructions: '',
    category: '',
    image: '',
}

const EditRecipeForm = props => {
    const [recipe, setRecipe] = useState(initialRecipe)
    const { recipeId } = props;

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get(`/recipes/${recipeId}`)
    //     .then(resp => {
    //         console.log(resp);
    //         setRecipe()
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }, [])

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put('', recipe)
            .then(resp => {
                console.log(resp)
            }).catch(err => {
                console.log(err)
            })
    }
    
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Add a recipe</h1>
                <div className='formInput'>
                    <label>Title</label>
                    <input value={recipe.title} id="title" name="title" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>Family Member</label>
                    <input value={recipe.familyMember} id="familyMember" name="familyMember" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>ingredients</label>
                    <input value={recipe.ingredients} id="ingredients" name="ingredients" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>Instructions</label>
                    <input value={recipe.instructions} id="instructions" name="instructions" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label>Category</label>
                    <input value={recipe.category} id="category" name="category" onChange={handleChange} />
                </div>
                <div className='formInput'>
                    <label >Image</label>
                    <input type="file" value={recipe.image} id="image" name="image" onChange={handleChange} />
                </div>

            </form>
        </div>
  </div>);
}

export default EditRecipeForm;
