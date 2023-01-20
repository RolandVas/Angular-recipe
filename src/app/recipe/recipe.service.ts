import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

/*
* So ist dieses Service überal verfügbar
* wenn ich es weglasse dann muss ich in recipe.componenet.ts in @Componenet providers: [RecipeService] einfügen => sehe dort
* dort muss ich schauen welche componente im HTML teil drinenn sind weil so kann ich bestimmel welche componente zugriff auf dieses Service haben
* mutter component -> recipe.componenet.ts
* child component -> recipe-list.component.ts -> dort währe der Service Verfügbar*/
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new EventEmitter<Recipe[]>()

  url: string = 'https://udemy-rezept-default-rtdb.europe-west1.firebasedatabase.app/recipe.json'

  constructor(private http: HttpClient) {}

  private recipe: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Sehr lecker',
      'https://image.brigitte.de/13333736/t/pR/v3/w1440/r1.5/-/schnitzel-panieren-teaser.jpg',
      [
        new Ingredient ('Pommes', 10),
        new Ingredient ('Schnitzel', 1),
      ]
    ),
    new Recipe(
      'Salat',
      'Nicht sooo lecker aber OK',
      'https://images.lecker.de/,id=4dba2952,b=lecker,w=610,cg=c.jpg',
      [
        new Ingredient('tomate', 2),
        new Ingredient('salat', 1)
      ]
    )
  ]

  /* man kann recipe auch statt privat publich machen und so könnte man direkt zugreifen,
  * aber laut udemy kurs gehört das so gemacht wie hier
  */
  getRecipes() {
    return this.recipe
  }

  getRecipe(id: number) {
    return this.recipe[id]
  }

  deleteRecipe(id: number) {
    this.recipe.splice(id, 1)
  }

  addRecipe(recipe: Recipe) {
    this.recipe.push(recipe)
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipe[this.recipe.indexOf(oldRecipe)] = newRecipe
  }

  storeData() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<Recipe[]>(this.url, this.recipe, {headers});
  }

  fetchData() {
    this.http.get<Recipe[]>(this.url)
      .subscribe((data: Recipe[]) => {
        this.recipe = data;
        this.recipeChanged.emit(this.recipe);
      });

  }

}
