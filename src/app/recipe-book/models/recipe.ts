import { Ingredient } from "./ingredient";

export type Recipe = {
    name : string;
    description:string;
    imagePath: string;
    ingredients: Ingredient[];
 }
