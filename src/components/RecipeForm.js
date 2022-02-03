import axios from 'axios';
import React, { useState } from 'react';
import axiosWithAuth from '../authentication/axiosWithAuth';
import "../styles/recipeForm.css"

const initialRecipe = {
    id: 0,
    title: '',
    familyMember: '',
    ingredients: '',
    instructions: '',
    category: '',
    image: '',
}

function RecipeForm() {
    const [recipe, setRecipe] = useState(initialRecipe)

    const handleChange = e => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, familyMember, ingredients, instructions, image } = recipe;
        let source;
        await axios
          .get("https://secret-family-recipes-8.herokuapp.com/api/sources")
          .then((res) => {
            const sources = res.data;
            console.log(sources);
            source = sources.find((el) => el.source_name === familyMember);
          })
            .catch((err) => console.error(err));
        console.log(source);
        if (source === undefined) {
          await axios
            .post("https://secret-family-recipes-8.herokuapp.com/api/sources", {
              source_name: familyMember,
            })
            .then((res2) => {
              const newSource = res2.data;
              source = newSource;
            })
            .catch((err) => console.error(err));
        }
        console.log(source);
        const sourceId = JSON.stringify(source.source_id)
        console.log(sourceId, typeof sourceId)

        const newRecipe = {
            recipe_name: title,
            recipe_img_url: image,
            recipe_ingredients: ingredients,
            recipe_instructions: instructions,
            source_id: sourceId,
            category_id: '1'
        }
        axiosWithAuth()
            .post('/api/recipes', newRecipe)
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
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
  </div>);
}

export default RecipeForm;
