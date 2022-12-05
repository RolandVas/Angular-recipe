import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: []
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient
  @Output() cleard = new EventEmitter()
  isAdd = true

  constructor(private sls: ShoppingListService) {
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount)
    if (!this.isAdd) {
    //  Bearbeiten
      this.sls.editIngredient(this.selectedIngredient, newIngredient)
    } else {
    //  Neu
      this.sls.addIngredient(newIngredient)
    }
    this.onClear(form)
  }

  onClear(form: NgForm) {
    this.cleard.emit()
    form.resetForm()
  }

  ngOnChanges(changes) {
    if (changes.selectedIngredient.currentValue == null) {
      this.selectedIngredient= {name: null, amount:null};
      this.isAdd = true
    } else {
      this.isAdd = false
    }
  }

  ngOnInit(): void {
  }

}
