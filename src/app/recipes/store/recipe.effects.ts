import { Effect, Actions } from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import { HttpClient } from "@angular/common/http";

import * as RecipeActions from '../store/recipe.actions';
import { Recipe } from '../recipe.model';


export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .ofType()
        .switchMap((action: RecipeActions.FetchRecipes)=>{
            return this.httpClient.get<Recipe[]>('https://recipe-book-80977.firebaseio.com/recipe.json',
		        {
                    observe: 'body'
                //	headers: headers
                    })
                
            }
        )
        .map(
            (recipes) => {
                console.log(recipes);
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: recipes
                };
            }
        )
    

    constructor(private actions$: Actions, private httpClient: HttpClient) {}
}