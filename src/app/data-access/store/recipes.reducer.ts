import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../models/recipe.model';
import { loadRecipes, loadRecipesFailure, loadRecipesSuccess } from './recipes.actions';

export interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
}

export const initialState: RecipesState = {
  recipes: [],
  loading: false,
};

export const recipesReducer = createReducer(
  initialState,
  on(loadRecipes, (state) => ({ ...state, loading: true })),
  on(loadRecipesSuccess, (state, { recipes }) => ({
    ...state,
    recipes,
    loading: false,
  })),
  on(loadRecipesFailure, (state) => ({ ...state, loading: false }))
);