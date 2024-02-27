import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent {
  newRecipe!: FormGroup;
  id!: number;
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.newRecipe);
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<FormGroup>([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']){
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount),
            })
          );
        }
      }
    }

    this.newRecipe = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    // a getter!
    return (<FormArray>this.newRecipe.get('ingredients')).controls;
  }
}
