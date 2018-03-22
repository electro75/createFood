import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import * as fromRecipe from '../store/recipe.reducers';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {


	recipes: Observable<fromRecipe.State>;

	  constructor(private router: Router,	private route: ActivatedRoute,
				  private store: Store<fromRecipe.FeatureState>) { }

 	ngOnInit() {
	   this.recipes = this.store.select('recipes');
 	}

}
