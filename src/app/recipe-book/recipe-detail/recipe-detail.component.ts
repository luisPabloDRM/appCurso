import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;

  ngOnInit():void {
    
  }

}
