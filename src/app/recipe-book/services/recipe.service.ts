import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Ingredient } from '../models/ingredient';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   {
  //     name: 'Braciole',
  //     description:
  //       'This cozy dish of rolled meat stuffed with breadcrumbs and cheese and cooked in tomato sauce is a staple at Italian family gatherings.',
  //     imagePath:
  //       'https://www.foodandwine.com/thmb/dX7pNh_WX83ESqb9VJuvkBwVKwM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg',
  //     ingredients: [
  //       {
  //         name: 'Chicken',
  //         amount: 3,
  //       },
  //       {
  //         name: 'Cheese',
  //         amount: 20,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Chicken Parmesan',
  //     description:
  //       'This classic Italian-American dish is a family favorite. The chicken is breaded, browned, then baked with a rich tomato sauce and topped with mozzarella.',
  //     imagePath:
  //       'https://thecozycook.com/wp-content/uploads/2022/08/Chicken-Parmesan-Recipe-1.jpg',
  //     ingredients: [
  //       {
  //         name: 'Mozarella',
  //         amount: 2,
  //       },
  //       {
  //         name: 'Meat',
  //         amount: 2,
  //       },
  //     ],
  //   },
  // ];
  private recipes: Recipe[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    console.log([...this.recipes]);
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    console.log('Array Recipes ', this.recipes);
    this.recipesChanged.next(this.recipes.slice());
    console.log('Recipes after add ', this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
