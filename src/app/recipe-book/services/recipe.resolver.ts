import { ResolveFn } from "@angular/router";
import { Recipe } from "../models/recipe";
import { inject } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";

export const recipeFetchDataResolve : ResolveFn<any> = (route) => {
    const dataStorage = inject(DataStorageService);
    return dataStorage.fetchingRecipes()
}