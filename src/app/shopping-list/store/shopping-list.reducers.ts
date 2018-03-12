import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
    shoppingList: State
}

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

const initialState : State = {
    ingredients: [
        new Ingredient('Potatoes', 6),
        new Ingredient('Corriander', 15)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(state= initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type){
        case ShoppingListActions.ADD_INGREDIENT :
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }

        case ShoppingListActions.ADD_INGREDIENTS :
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }

        case ShoppingListActions.UPDATE_INGREDIENT :
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            let ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ... state,
                ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }

        case ShoppingListActions.DELETE_INGREDIENT :
            ingredients = [...state.ingredients];
            ingredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }

        case ShoppingListActions.EDIT_INIT :
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient,
                editedIngredientIndex: action.payload
            }

        case ShoppingListActions.EDIT_STOP :
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        default: 
            return state
    }
}