import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ingredient } from '../../../data-access/models/ingredient.model';
import { ShoppingListService } from '../../../data-access/services/shopping-list.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  shoppingList: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
  }

  clearList(): void {
    this.shoppingListService.clearShoppingList();
    this.shoppingList = [];
  }
}
