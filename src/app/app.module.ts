import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http'
import { ShoppingListModule } from './shopping-list/shopping-list.module'
import { RecipeModule } from './recipe/recipe.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    routing,
    ShoppingListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
