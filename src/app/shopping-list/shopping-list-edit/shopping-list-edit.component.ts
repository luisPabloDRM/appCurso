import {
  Component,

} from '@angular/core';
import { Ingredient } from '../../recipe-book/models/ingredient';
import { ShoppingListService } from '../service/shopping-list.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  protected recipeForm = new FormGroup({
    name: new FormControl(),
    amount: new FormControl(),
  });

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredients() {
    const ingName = this.recipeForm.value.name
    const ingAmount = this.recipeForm.value.amount
    const newIngredient: Ingredient = { name : ingName , amount : ingAmount };
    this.shoppingListService.addIngredient(newIngredient);
  }
}
