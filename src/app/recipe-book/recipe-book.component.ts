import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './models/recipe';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  standalone: true,
  imports: [CommonModule, RecipeDetailComponent, RecipeListComponent],
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css',
  providers: [RecipeService]
})
export class RecipeBookComponent {
  selectedRecipe: Recipe | undefined;
  constructor( private recipeService : RecipeService ) {}

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    );
  }
}
