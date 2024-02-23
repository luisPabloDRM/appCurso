import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './services/recipe.service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-recipe-book',
  standalone: true,
  imports: [CommonModule, RecipeDetailComponent, RecipeListComponent, RouterOutlet ],
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.css',
  providers: [RecipeService]
})
export class RecipeBookComponent {
  constructor() {}

  ngOnInit(){
  }
}
