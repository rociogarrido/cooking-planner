import { Component } from '@angular/core';
import { Recipe } from '../../../data-access/models/recipe.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { AppState } from '../../../app.state';
import { selectAllRecipes } from '../../../data-access/store/recipes.selector';
import { CommonModule } from '@angular/common';
import { loadRecipes } from '../../../data-access/store/recipes.actions';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  template: `
    <mat-card *ngFor="let recipe of recipes$ | async">
      <h3>{{ recipe.name }}</h3>
      <p>{{ recipe.description }}</p>
    </mat-card>

    <div *ngIf="(recipes$ | async)?.length === 0">
      <p>No hay recetas disponibles.</p>
    </div>
  `,
  imports: [CommonModule, MatCardModule],
})
export class RecipeListComponent {
  recipes$: Observable<Recipe[]>;

  constructor(private store: Store<AppState>) {
    this.recipes$ = this.store.select(selectAllRecipes);
  }

  ngOnInit(): void {
    this.store.dispatch(loadRecipes());
  }
}
