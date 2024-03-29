import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup
  private recipeIndex: number
  private subscription: Subscription
  private isNew = true
  private recipe: Recipe

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    if (this.isNew) {
      this.recipeService.addRecipe(newRecipe)
      console.log(newRecipe)
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe)
    }
    this.onNavigateBack()
  }

  onCancel() {
    this.onNavigateBack()
  }

  onNavigateBack() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      params => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false
          this.recipeIndex = +params['id']
          this.recipe = this.recipeService.getRecipe(this.recipeIndex)
        } else {
          this.isNew = true
          this.recipe = null;
        }
      }
    )

    let recipeName = null;
    let recipeImagePath = null;
    let recipeDescription = null;
    let recipeIngredients = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.hasOwnProperty('ingredients')) {
        for (let ingredient of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount),
            })
          )
        }
      }
      recipeName = this.recipe.name
      recipeImagePath = this.recipe.imagePath
      recipeDescription = this.recipe.description
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients,
    })
  }

  onAddingridientControll(name: string, amount: string) {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, Validators.required)
      })
    )
  }

  onRemoveIngredientControl(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
