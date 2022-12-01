import { Routes } from '@angular/router';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const RECIPE_ROUTES: Routes = [
  { path: '', component: RecipeStartComponent },
  { path: 'neu', component: RecipeEditComponent },
  { path: ':id', component: RecipeDetailsComponent },
  { path: ':id/bearbeiten', component: RecipeEditComponent },
]
