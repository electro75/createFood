import { Action } from '@ngrx/store';

export const INIT_SIGNUP = 'INIT_SIGNUP';
export const INIT_SIGNIN = 'INIT_SIGNIN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';
export const SET_TOKEN = 'SET_TOKEN';

export class InitSignup implements Action {
    readonly type = INIT_SIGNUP;

    constructor(public payload: {username: string, password: string}) {}
}

export class InitSignin implements Action {
    readonly type = INIT_SIGNIN;

    constructor(public payload: {username: string, password: string}) {}
}

export class Signup implements Action {
    readonly type= SIGN_UP;

}

export class Signin implements Action {
    readonly type = SIGN_IN;

}

export class Logout implements Action {
    readonly type = LOG_OUT;

}

export class SetToken implements Action {
    readonly type = SET_TOKEN;

    constructor(public payload: string) { }
}

export type AuthActions =   Signup|Signin|Logout|SetToken|InitSignup|InitSignin;