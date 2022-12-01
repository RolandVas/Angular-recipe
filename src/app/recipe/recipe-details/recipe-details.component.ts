import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe

  constructor(
    private recipeService: RecipeService,
    private sls: ShoppingListService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( param =>
    this.selectedRecipe = this.recipeService.getRecipe(+param['id']) /* +param -> standartmäsig srting und mit + zu nummer konvertiren*/
    )
  }

  onAddToList() {
    this.sls.addIngridients(this.selectedRecipe?.ingridients)
  }

}
