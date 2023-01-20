import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: []
})
export class RecipeListComponent implements OnInit {
  recipes;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
    this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) =>
      this.recipes = recipes
    )
  }

  onNewRecipe() {
    this.router.navigate(['/rezepte', 'neu'])
  }

}
