import { Effect, Actions } from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { HttpClient, HttpRequest } from "@angular/common/http";


import { Recipe } from '../recipe.model';
import { Store } from "@ngrx/store";

import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducers';


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

    @Effect({dispatch: false})
    recipeStore = this.actions$
        .ofType(RecipeActions.STORE_RECIPES)
        .withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state])=>{
            const req = new HttpRequest('PUT', 'https://recipe-book-80977.firebaseio.com/recipe.json', state.recipes, {
			reportProgress: true
			});
		    return this.httpClient.request(req);
        })

    

    constructor(private actions$: Actions, private httpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>) {}
}