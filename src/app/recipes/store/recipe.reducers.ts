import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';


export interface FeatureState extends fromApp.AppState{
    recipes: State
}

export interface State {
    recipes: Recipe[]
}

const initialState : State = {
    recipes: [
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
        ]
}


export function recipeReducer(state = initialState, action) {
    switch(action.type) {
        case RecipeActions.SET_RECIPES:
            return {
                ...state,
                recipes: [...action.payload]
            };
            
        
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        
        case RecipeActions.UPDATE_RECIPE:
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            };
            let recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes
            };
        
        case RecipeActions.DELETE_RECIPE:
            recipes = [...state.recipes];
            recipes.splice(action.payload, 1);
            return {
                ...state,
                recipes
            }

        default:
            return state
    }
}