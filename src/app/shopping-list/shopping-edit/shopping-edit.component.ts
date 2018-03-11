import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  // editItemIndex: number;
  edittedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data=> {
          if(data.editedIngredientIndex > -1) {
            this.edittedItem = data.editedIngredient;
            this.editMode = true;
            this.slForm.setValue({
              name: this.edittedItem.name,
              amount: this.edittedItem.amount
            });
          } else {
            this.editMode = false;
          }
        }
      )
  }

  onAddItem(form: NgForm){
    const value = form.value;
  	const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        ingredient: newIngredient
      }));
    } else{
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient())
    this.onClear();

  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.EditStop())
    this.subscription.unsubscribe();
  }
}
