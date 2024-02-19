import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../recipe-book/models/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef:| ElementRef | undefined;
  @ViewChild('amountInput', { static: true }) amountInputRef:| ElementRef | undefined;

  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  addIngredients() {
    const ingName = this.nameInputRef!.nativeElement.value;
    const ingAmount = this.amountInputRef!.nativeElement.value;
    const newIngredient: Ingredient = { name: ingName, amount: ingAmount };
    this.ingredientAdded.emit(newIngredient);
  }
}
