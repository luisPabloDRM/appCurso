import {Component} from '@angular/core';
import { Ingredient } from '../../recipe-book/models/ingredient';
import { ShoppingListService } from '../service/shopping-list.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  protected subscription!: Subscription;
  protected editMode = false;
  protected deleteMode = false;
  protected editedItemIndex!: number;
  protected editedItem!: Ingredient;

  protected recipeForm = new FormGroup({
    name: new FormControl(),
    amount: new FormControl(),
  });

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.recipeForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  addIngredients() {
    const ingName = this.recipeForm.value.name;
    const ingAmount = this.recipeForm.value.amount;
    const newIngredient: Ingredient = { name: ingName, amount: ingAmount };
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.recipeForm.reset();
  }

  onClearForm() {
    this.recipeForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredients(this.editedItemIndex)
    this.recipeForm.reset()

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
