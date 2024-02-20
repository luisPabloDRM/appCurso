import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../models/recipe';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent {
  // He quitado el array de recetas del componente, lo he pasado al servicio, y aqui solo lo declaro con su tipado
  recipes: Recipe[] = []
  

  constructor(private recipeService: RecipeService) {}

  // En el OnInit, con el this.recipes = ... lo que hago es asignarle un nuevo valor,
  // que en este caso es el método que hemos declarado en el servicio 
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes()
  }
}
