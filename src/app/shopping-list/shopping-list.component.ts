import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { Ingredient } from '../recipe-book/models/ingredient';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
