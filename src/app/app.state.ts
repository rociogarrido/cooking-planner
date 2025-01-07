import { ActionReducerMap } from '@ngrx/store';
import {
  recipesReducer,
  RecipesState,
} from './data-access/store/recipes.reducer';

export interface AppState {
  recipes: RecipesState;
}

export const reducers: ActionReducerMap<AppState> = {
  recipes: recipesReducer,
};
