import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  constructor ( private recipeService : RecipeService ){}

  ngOnInit(): void {}

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }
}
