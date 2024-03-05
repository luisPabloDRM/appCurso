import { ResolveFn } from "@angular/router";
import { Recipe } from "../models/recipe";
import { inject } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

export const recipeFetchDataResolve : ResolveFn<any> = (route) => {
    const dataStorage = inject(DataStorageService);
    const recipeService = inject(RecipeService)
    const recipes = recipeService.getRecipes()

    if( recipes.length === 0){
        return dataStorage.fetchingRecipes()
    }else {
        return recipes;
    }
}