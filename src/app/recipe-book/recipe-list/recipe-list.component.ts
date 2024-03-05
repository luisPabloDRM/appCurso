import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../models/recipe';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent {
  // He quitado el array de recetas del componente, lo he pasado al servicio, y aqui solo lo declaro con su tipado
  recipes = this.recipeService.recipesChanged.pipe(
    takeUntilDestroyed(),
    startWith(this.recipeService.getRecipes())
  );

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorage: DataStorageService
  ) {}

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
