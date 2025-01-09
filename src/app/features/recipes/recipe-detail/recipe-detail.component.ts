import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from '../../../data-access/models/recipe.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllRecipes } from '../../../data-access/store/recipes.selector';
import { AppState } from '../../../app.state';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent {
  recipe$!: Observable<Recipe | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe$ = this.store
      .select(selectAllRecipes)
      .pipe(map((recipes) => recipes.find((recipe) => recipe.id === id)));
  }
}
