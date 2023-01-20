import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RecipeComponent } from './recipe.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipeStartComponent } from './recipe-start.component'
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component'
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component'
import { HomeComponent } from '../home.component'
import { recipeRouting } from './recipe-routing'


@NgModule({
  declarations: [
    RecipeComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    recipeRouting
  ],
})
export class RecipeModule { }
