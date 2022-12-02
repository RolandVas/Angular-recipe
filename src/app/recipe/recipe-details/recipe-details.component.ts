import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe
  recipeId: number

  private subscription: Subscription

  constructor(
    private recipeService: RecipeService,
    private sls: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe( param => {
        this.recipeId = +param['id']
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeId)
      } /* +param -> standartmäsig srting und mit + zu nummer konvertiren*/
    )
  }

  onAddToList() {
    this.sls.addIngridients(this.selectedRecipe?.ingridients)
  }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten'])
  }

  onDelete() {
    this.router.navigate(['/rezepte'])
    this.recipeService.deleteRecipe(this.recipeId)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
