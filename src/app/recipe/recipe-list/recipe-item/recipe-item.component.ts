import { Component, Input, OnInit, } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: []
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined
  @Input() recipeId: number

  constructor() { }

  ngOnInit(): void {
  }

}
