import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	loadedFeature = 'recipe';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyDlyBkpAKyL78ycp1RmPRQxqDADSxqlUZ4",
		    authDomain: "recipe-book-80977.firebaseapp.com"
			});
	}

	onNavigate(feature: string){
		this.loadedFeature = feature;
	}
  
}
