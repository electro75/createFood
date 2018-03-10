
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


const initialState = {
    ingredients: [
        new Ingredient('Potatoes', 6),
        new Ingredient('Corriander', 15)
    ]
}

export function shoppingListReducer(state= initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type){
        case ShoppingListActions.ADD_INGREDIENT :
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        default: 
            return state
    }
}