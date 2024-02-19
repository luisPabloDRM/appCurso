import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe';


@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input()  recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(){

  }

  onSelected(){
    this.recipeSelected.emit();
  }
}
