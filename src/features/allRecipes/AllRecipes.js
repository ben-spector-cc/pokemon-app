import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import { loadData } from '../features/allRecipes/allRecipesSlice'

import { useEffect } from 'react';

export const AllRecipes = ({ allRecipes, dispatch }) => {
  
  const onFirstRenderHandler = () => {
    dispatch(loadData());
  }

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  useEffect(onFirstRenderHandler, [])

  return allRecipes.map((recipe, i) => (
    <button key={recipe.name + i} onClick={() => onAddRecipeHandler(recipe)}>
      {recipe.name}
      <img alt={"An image of the recipe " + recipe.name} src={recipe.img}></img>
    </button>
  ))
};