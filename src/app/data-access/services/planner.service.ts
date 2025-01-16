import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class PlannerService {
  private planner: { day: string; recipes: Recipe[] }[] = [];

  addRecipeToPlanner(day: string, recipe: Recipe): void {
    let dayEntry = this.planner.find((d) => d.day === day);
    if (!dayEntry) {
      dayEntry = { day, recipes: [] };
      this.planner.push(dayEntry);
    }
    dayEntry.recipes.push(recipe);
  }

  getPlanner(): { day: string; recipes: Recipe[] }[] {
    return this.planner;
  }
}
