import { Subject } from 'rxjs';
import { Ingredient } from '../../recipe-book/models/ingredient';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  public startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index : number){
    return this.ingredients[index]
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index : number , newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice())

  }

  deleteIngredients( index: number ){
    this.ingredients.splice(index, 1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
