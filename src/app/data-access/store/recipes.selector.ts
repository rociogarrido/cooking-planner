import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipesState } from './recipes.reducer';

export const selectRecipesState =
  createFeatureSelector<RecipesState>('recipes');

export const selectAllRecipes = createSelector(
  selectRecipesState,
  (state: RecipesState) => state.recipes,
);

export const selectRecipesLoading = createSelector(
  selectRecipesState,
  (state: RecipesState) => state.loading,
);
