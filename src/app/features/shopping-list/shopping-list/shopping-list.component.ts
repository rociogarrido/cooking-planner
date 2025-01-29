import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../data-access/models/ingredient.model';
import { ShoppingListService } from '../../../data-access/services/shopping-list.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingList();
  }

  clearList(): void {
    this.shoppingListService.clearShoppingList();
    this.shoppingList = [];
  }

  exportShoppingListToPDF(): void {
    const doc = new jsPDF();

    doc.text('Shopping List', 14, 10);

    autoTable(doc, {
      startY: 20,
      head: [['Quantity', 'Unit', 'Ingredient']],
      body: this.shoppingList.map((item) => [
        item.quantity,
        item.unit,
        item.name,
      ]),
    });

    doc.save('shopping-list.pdf');
  }
}
