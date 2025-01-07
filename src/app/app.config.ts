import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { RecipesEffects } from './data-access/store/recipes.effects';
import { provideStore } from '@ngrx/store';
import { recipesReducer } from './data-access/store/recipes.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideEffects([RecipesEffects]),
    provideStore({
      recipes: recipesReducer,
    }),
  ],
};
