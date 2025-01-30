import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class PlannerService {
  private readonly STORAGE_KEY = 'plannerData';
  private planner: { day: string; recipes: Recipe[] }[] = [];

  constructor() {
    this.loadFromStorage();
  }

  addRecipeToPlanner(day: string, recipe: Recipe): void {
    let dayEntry = this.planner.find((d) => d.day === day);
    if (!dayEntry) {
      dayEntry = { day, recipes: [] };
      this.planner.push(dayEntry);
    }
    dayEntry.recipes.push(recipe);

    this.saveToStorage();
  }

  getPlanner(): { day: string; recipes: Recipe[] }[] {
    return this.planner;
  }

  private saveToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.planner));
  }

  private loadFromStorage(): void {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (storedData) {
      this.planner = JSON.parse(storedData);
    }
  }

  removeRecipeFromPlanner(day: string, recipeId: string): void {
    const dayEntry = this.planner.find((d) => d.day === day);
    if (dayEntry) {
      dayEntry.recipes = dayEntry.recipes.filter(
        (recipe) => recipe.id !== recipeId,
      );

      if (dayEntry.recipes.length === 0) {
        this.planner = this.planner.filter((d) => d.day !== day);
      }

      this.saveToStorage();
    }
  }
}
