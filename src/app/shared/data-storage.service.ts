import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipe-book/services/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(
    private httpClient: HttpClient, 
    private recipeService: RecipeService
    ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put('https://recipeapp-828d3-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(
        response => {
            console.log(response);
        }

    );
  }
}
