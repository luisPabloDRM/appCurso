import { EventEmitter } from "@angular/core";
import { Ingredient } from "../../recipe-book/models/ingredient"; 

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

 private ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ];

  getIngredients (){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push( ingredient );
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}