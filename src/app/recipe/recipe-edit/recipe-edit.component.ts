import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup

  constructor(private recipeService: RecipeService) { }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    this.recipeService.addRecipe(newRecipe)
  }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'ingredients': new FormArray([
        // new FormGroup({
        //   'name': new FormControl(null, Validators.required)
        // })
      ]),
    })
  }

}
