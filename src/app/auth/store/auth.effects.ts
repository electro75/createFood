import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$
            .ofType(AuthActions.INIT_SIGNUP)
            .map((action: AuthActions.InitSignup)=>{
                return action.payload;
            })
            .switchMap((authData: {username: string, password: string})=>{
                return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password))
            })
            .switchMap(()=>{
                return fromPromise(firebase.auth().currentUser.getIdToken());
            })
            .mergeMap((token: string)=>{
                this.router.navigate(['/']);
                return [
                    {
                        type: AuthActions.SIGN_UP
                    },{
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ]
            })

    @Effect()
    authSignin = this.actions$
            .ofType(AuthActions.INIT_SIGNIN)
            .map((action: AuthActions.InitSignin)=>{
                return action.payload;
            })
            .switchMap((authData: {username: string, password: string})=>{
                return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password))
            })
            .switchMap(()=>{
                return fromPromise(firebase.auth().currentUser.getIdToken());
            })
            .mergeMap((token: string)=>{
                this.router.navigate(['/']);
                return [
                    {
                        type: AuthActions.SIGN_IN
                    },{
                        type: AuthActions.SET_TOKEN,
                        payload: token
                    }
                ]
            })
    constructor(private actions$: Actions, private router: Router) {}
}