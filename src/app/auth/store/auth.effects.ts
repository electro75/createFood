import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/observable/fromPromise';

import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';
import { switchMap } from 'rxjs/operators';


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
                return {
                    type: 
                }
            })

    constructor(private actions$: Actions) {}
}