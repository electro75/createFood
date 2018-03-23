import { Subject } from 'rxjs/Subject';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService{

		recipesChanged= new Subject<Recipe[]>();
	
		private recipes: Recipe[] = [
			new Recipe('Sassy tots',
			 'Crispy toast potatoes',
			  'http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg',
		  		[
		  			new Ingredient('masala', 50),
		  			new Ingredient('Potato', 7)
		  		]),
			new Recipe('Ibssano',
				'Chicken Kebab',
			 	'http://www.ibssano.com/wpimages/wp72044030_05_06.jpg',
			 	[
			 		new Ingredient('chicken',1),
			 		new Ingredient('kothimbir', 15)
			 	])
			];


	constructor(){}

	getRecipes(){
		return this.recipes.slice();
	}

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}
}