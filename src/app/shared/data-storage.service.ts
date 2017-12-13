import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
	constructor (private httpClient: HttpClient, private recipeService: RecipeService,
				private authService: AuthService) {}

	storeRecipes() {
//		return this.httpClient.put('https://recipe-book-80977.firebaseio.com/recipe.json?auth='+token, this.recipeService.getRecipes());
		const req = new HttpRequest('PUT', 'https://recipe-book-80977.firebaseio.com/recipe.json', this.recipeService.getRecipes(), {
			reportProgress: true
			}
		);
		return this.httpClient.request(req);
	}

	getRecipes(){
		//const headers = new HttpHeaders().set('Authorization', '/some key/');
		this.httpClient.get<Recipe[]>('https://recipe-book-80977.firebaseio.com/recipe.json',
		{
			observe: 'body'
		//	headers: headers
			})
		.map(
				(recipes) => {
					console.log(recipes);
					for(let recipe of recipes){
						if(!recipe['ingredients']){
							console.log(recipe);
							recipe['ingredients'] = [];
						}
					}
					return recipes;
				}
			)
		.subscribe(
			(recipes: Recipe[]) =>{
				this.recipeService.setRecipes(recipes);
			}
		)
	}
}