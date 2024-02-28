import { Component } from '@angular/core';
import { Recipe } from '../models/recipe';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../services/recipe.service';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { ActivatedRoute ,Router, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  recipe!: Recipe;
  id!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'], { relativeTo: this.route})
  }
}
