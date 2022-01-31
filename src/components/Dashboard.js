import React from 'react';

import dummyData from '../temporary data/dummyData';
import SearchBar from './SearchBar';
import ViewRecipe from './ViewRecipe';

function Dashboard() {

    const handleViewRecipe = (id) => {
        <ViewRecipe data={dummyData} recipeId={id}/>

    }


  return(
      <div className='dashboard'>
          <h2>Search for Secret Recipes!</h2>
          <SearchBar />
          <div className='dashboard-container'>
          {dummyData.map(recipe => {
              return <div  className='recipe-cards' key={recipe.id}>
                  <h3>{recipe.title}</h3>
                  <img onClick={handleViewRecipe(recipe.id)} src={recipe.image} alt={recipe.title} />
              </div>
          })}
        </div>
      </div>
  );
}

export default Dashboard;
