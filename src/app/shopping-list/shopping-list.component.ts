import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { Ingredient } from '../recipe-book/models/ingredient';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];
  private subscription!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
