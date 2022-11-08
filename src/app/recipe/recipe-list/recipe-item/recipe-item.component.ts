import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined
  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.recipeSelected.emit(this.recipe)
  }

}
