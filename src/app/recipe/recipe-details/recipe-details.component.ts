import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe

  constructor(private recipeService: RecipeService, private sls: ShoppingListService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe( (recipe: Recipe) => {
      this.selectedRecipe = recipe
      }
    )
  }

  onAddToList() {
    this.sls.addIngridients(this.selectedRecipe?.ingridients)
  }

}
