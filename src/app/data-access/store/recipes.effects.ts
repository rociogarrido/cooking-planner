import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RecipesService } from '../services/recipes.service';
import {
  loadRecipes,
  loadRecipesFailure,
  loadRecipesSuccess,
} from './recipes.actions';

@Injectable()
export class RecipesEffects {
  actions$ = inject(Actions);
  recipesService = inject(RecipesService);

  loadRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecipes),
      mergeMap(() =>
        this.recipesService.getRecipes().pipe(
          map((recipes) => loadRecipesSuccess({ recipes })),
          catchError(() => of(loadRecipesFailure())),
        ),
      ),
    ),
  );
}
