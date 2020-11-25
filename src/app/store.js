import { createStore, combineReducers } from 'redux';
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { searchTermReducer } from '../features/search/searchSlice.js';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';

export const store = createStore(combineReducers({
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer,
  allRecipes: allRecipesReducer
}));