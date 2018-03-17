import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RecipesComponent } from './recipes.component';
import { RecpieStartComponent } from './recpie-start/recpie-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { recipeReducer } from './store/recipe.reducers';


@NgModule({
	declarations: [
		RecipesComponent,
		RecpieStartComponent,
		RecipeListComponent,
		RecipeDetailComponent,
		RecipeEditComponent,
		RecipeItemComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RecipesRoutingModule,
		SharedModule,
		StoreModule.forFeature('recipes', recipeReducer)
	]
})
export class RecipesModule {

}