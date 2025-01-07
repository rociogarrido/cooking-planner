import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { PlannerCalendarComponent } from './features/planner/planner-calendar/planner-calendar.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'planner', component: PlannerCalendarComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', component: RecipeListComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
