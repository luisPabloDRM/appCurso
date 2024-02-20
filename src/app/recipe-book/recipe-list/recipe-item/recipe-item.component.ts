import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input()  recipe!: Recipe;

  constructor(private recipeService: RecipeService){ }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
