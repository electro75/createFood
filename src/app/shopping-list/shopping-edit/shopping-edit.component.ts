import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  edittedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

	constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.editingInit.subscribe(
        (id: number)=>{
          this.editItemIndex = id;
          this.editMode = true;
          this.edittedItem = this.slService.getIngredient(id);
          this.slForm.setValue({
            name: this.edittedItem.name,
            amount: this.edittedItem.amount
            }
          );
        }
      )    
  }

  onAddItem(form: NgForm){
    const value = form.value;
  	const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editItemIndex, newIngredient);
    } else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editItemIndex);
    this.onClear();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
