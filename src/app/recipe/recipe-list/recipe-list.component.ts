import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: []
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>()
  recipe = new Recipe('Dummy', 'Dummy', 'https://upload.wikimedia.org/wikipedia/en/f/f8/Dummy_Title_Card.jpeg');
  selectedRecipe: Recipe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
