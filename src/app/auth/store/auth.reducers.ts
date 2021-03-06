import * as authActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
}

const initialState : State = {
    token: null,
    authenticated: false
}

export function authReducer(state = initialState, action: authActions.AuthActions) {
    switch(action.type){
        case authActions.SIGN_UP:
        case authActions.SIGN_IN:
            return {
                ...state,
                authenticated: true
            };

        case authActions.LOG_OUT:
            return {
                ...state,
                token: null,
                authenticated: false
            }

        case authActions.SET_TOKEN :
            return {
                ...state,
                token: action.payload,
            }

        default:
            return state;
    }
}

