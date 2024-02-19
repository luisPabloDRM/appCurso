import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-recipe-book',
  standalone: true,
  imports: [CommonModule, RecipeDetailComponent, RecipeListComponent],
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css',
})
export class RecipeBookComponent {
  selectedRecipe: Recipe | undefined;
  constructor() {}
}
