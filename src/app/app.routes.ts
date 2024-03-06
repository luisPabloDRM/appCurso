import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { HomeComponent } from './home/home.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { recipeFetchDataResolve } from './recipe-book/services/recipe.resolver';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent, resolve:{recipe : recipeFetchDataResolve} },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];
