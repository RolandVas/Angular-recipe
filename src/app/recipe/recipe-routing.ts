import { RouterModule, Routes } from '@angular/router'
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeComponent } from './recipe.component'

const RECIPE_ROUTES: Routes = [
  { path: '', component: RecipeComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'neu', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/bearbeiten', component: RecipeEditComponent },
    ]},
]

export const recipeRouting = RouterModule.forChild(RECIPE_ROUTES)
