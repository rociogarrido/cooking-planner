import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private shoppingList: Ingredient[] = [];

  addIngredient(ingredient: Ingredient): void {
    this.shoppingList.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.shoppingList.push(...ingredients);
  }

  getShoppingList(): Ingredient[] {
    return this.shoppingList;
  }

  clearShoppingList(): void {
    this.shoppingList = [];
  }
}
