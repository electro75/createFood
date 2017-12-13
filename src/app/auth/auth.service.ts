import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

	username: string= ''

	constructor(private router: Router) {}

	token: string;
	signupUser(email: string, password: string){
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(
			(response)=>{
				console.log(response);
				this.router.navigate(['/']);
				firebase.auth().currentUser.getToken()
				.then(
					(token: string)=>{
						this.token = token;
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
				this.router.navigate(['/']);
				console.log(response.email);
				this.username = this.genUsername(response.email);
				console.log(this.username);
				firebase.auth().currentUser.getToken()
				.then(
					(token: string)=>{this.token = token}
					)
			}
		).catch(
			(error) =>{console.log(error)}
		)
	}

	logout(){
		firebase.auth().signOut();
		this.token = null;
		this.router.navigate(['signin'])
	}

	getToken(){
		firebase.auth().currentUser.getToken()
		.then(
			(token: string)=>{this.token = token}
		);
		return this.token
	}

	isAuthenticated(){
		return this.token!= null; 
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