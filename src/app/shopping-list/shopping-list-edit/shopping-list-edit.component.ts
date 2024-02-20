import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../recipe-book/models/ingredient';
import { ShoppingListService } from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInputRef:
    | ElementRef
    | undefined;
  @ViewChild('amountInput', { static: true }) amountInputRef:
    | ElementRef
    | undefined;

  

  constructor(private shoppingListService : ShoppingListService) {}

  addIngredients(event : Event) {
    event.preventDefault()
    const ingName = this.nameInputRef!.nativeElement.value;
    const ingAmount = this.amountInputRef!.nativeElement.value;
    const newIngredient: Ingredient = { name: ingName, amount: ingAmount };
    this.shoppingListService.addIngredient(newIngredient)
   
  }
}
