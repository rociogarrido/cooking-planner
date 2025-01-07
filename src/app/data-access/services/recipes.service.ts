import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { MOCK_RECIPES } from './recipes.mock';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  getRecipes(): Observable<Recipe[]> {
    return of(MOCK_RECIPES);
  }
}