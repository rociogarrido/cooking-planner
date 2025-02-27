import { Routes } from '@angular/router';
import { PlannerCalendarComponent } from './features/planner/planner-calendar/planner-calendar.component';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'planner', component: PlannerCalendarComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', component: RecipeListComponent },
];
