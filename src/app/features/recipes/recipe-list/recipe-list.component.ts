import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../data-access/models/recipe.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppState } from '../../../app.state';
import { selectAllRecipes } from '../../../data-access/store/recipes.selector';
import { CommonModule } from '@angular/common';
import { loadRecipes } from '../../../data-access/store/recipes.actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(private store: Store<AppState>) {
    this.recipes$ = this.store.select(selectAllRecipes);
  }

  ngOnInit(): void {
    this.store.dispatch(loadRecipes());
  }
}
