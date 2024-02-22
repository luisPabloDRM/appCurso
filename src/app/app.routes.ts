import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component'; 
import { HomeComponent } from './home/home.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';



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
        component: RecipeBookComponent,
        children: [
            {
                path: '',
                component: RecipeStartComponent
            },
            {
                path: ':id',
                component: RecipeDetailComponent
            }
        ]
    }
]
