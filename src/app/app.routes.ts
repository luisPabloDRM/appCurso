import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component'; 
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    {
        path :'',
        component: HomeComponent
    },
    {
        path :'shoppingList',
        component: ShoppingListComponent
    },
    {
        path :'recipes',
        component: RecipeBookComponent
    }
]
