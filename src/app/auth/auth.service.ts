import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService {

	username: string= ''

	constructor(private router: Router, private store: Store<fromApp.AppState>) {}

	token: string;
	signupUser(email: string, password: string){
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(
			(response)=>{
				this.store.dispatch(new AuthActions.Signup());
				console.log(response);
				this.router.navigate(['/']);
				firebase.auth().currentUser.getToken()
				.then(
					(token: string)=>{
						this.store.dispatch(new AuthActions.SetToken(token));
					}
				)
			}
		)
		.catch(
			(error) => {console.log(error)}
		)
	}

	signinUser(email: string, password: string){
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(
			(response)=>{
				this.store.dispatch(new AuthActions.Signin());
				this.router.navigate(['/']);
				console.log(response.email);
				this.username = this.genUsername(response.email);
				console.log(this.username);
				firebase.auth().currentUser.getToken()
				.then(
					(token: string)=>{
						this.store.dispatch(new AuthActions.SetToken(token));
					}
					)
			}
		).catch(
			(error) =>{console.log(error)}
		)
	}

	logout(){
		firebase.auth().signOut();
		this.store.dispatch(new AuthActions.Logout());
		this.router.navigate(['signin'])
	}

	genUsername(str: string){
		let newstr = '';
		for (let i =0; i<str.length; i++){
			if (str[i]!='@'){
				newstr = newstr + str[i];
			} else {
				break;
			}
		}
		return newstr;
	}
}