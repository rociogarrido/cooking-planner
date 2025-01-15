import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlannerService {
  private planner: { [key: string]: string[] } = {};

  addRecipeToPlanner(date: string, recipeName: string): void {
    if (!this.planner[date]) {
      this.planner[date] = [];
    }
    this.planner[date].push(recipeName);
    console.log(`Planner actualizado:`, this.planner);
  }

  getPlanner(): { [key: string]: string[] } {
    return this.planner;
  }
}
