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

  addIngridients (ingridients: Ingredient[]) {
    Array.prototype.push.apply(this.ingredients, ingridients)
  }
}
