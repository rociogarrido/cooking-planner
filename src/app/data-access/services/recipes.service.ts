import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ingredient, Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  meals: {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    [key: string]: string | null;
  }[];
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string]: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  http = inject(HttpClient);

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map((response) =>
        response.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: meal.strInstructions,
          imageUrl: meal.strMealThumb,
          ingredients: this.mapIngredients(meal),
        })),
      ),
    );
  }

  private mapIngredients(meal: Meal): Ingredient[] {
    const ingredients: Ingredient[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push({
          name: ingredient,
          quantity: parseFloat(measure) || 1,
          unit: '',
        });
      }
    }
    return ingredients;
  }
}
