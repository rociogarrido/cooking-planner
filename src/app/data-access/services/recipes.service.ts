import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Ingredient, Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  http = inject(HttpClient);

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) =>
        response.meals.map((meal: any) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          description: meal.strInstructions,
          imageUrl: meal.strMealThumb,
          ingredients: this.mapIngredients(meal),
        })),
      ),
    );
  }

  private mapIngredients(meal: any): Ingredient[] {
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
