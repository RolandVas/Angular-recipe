import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = []

  getIngredients() {
    return this.ingredients
  }

  addIngridients (ingredients: Ingredient[]) {
    Array.prototype.push.apply(this.ingredients, ingredients)
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1)
  }

  editIngredient(oldIngredient: Ingredient, newIngedient: Ingredient) {
    this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngedient
  }
}
