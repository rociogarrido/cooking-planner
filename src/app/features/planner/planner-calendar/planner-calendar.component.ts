import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlannerService } from '../../../data-access/services/planner.service';
import { MatCardModule } from '@angular/material/card';
import { Recipe } from '../../../data-access/models/recipe.model';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-planner-calendar',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './planner-calendar.component.html',
  styleUrl: './planner-calendar.component.scss',
})
export class PlannerCalendarComponent implements OnInit {
  displayedColumns: string[] = ['day', 'recipes'];
  week: { day: string; recipes: Recipe[] }[] = [];

  constructor(private plannerService: PlannerService) {}

  ngOnInit(): void {
    this.initializeWeek();
    this.week = this.plannerService.getPlanner();
  }

  initializeWeek(): void {
    const daysOfWeek = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const today = new Date();
    const currentDayIndex = today.getDay() - 1;
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDayIndex);

    this.week = daysOfWeek.map((day, index) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + index);

      return {
        day: `${day}`,
        recipes: [],
      };
    });
  }

  removeRecipeFromDay(day: string, recipeId: string): void {
    this.plannerService.removeRecipeFromPlanner(day, recipeId);
  }
}
