import { Component, OnInit ,Input} from '@angular/core';
import {Recipe} from 'src/app/core/params-interface-class/RecipeObj';
// importam Recipe din obiectul creeat !
import {ApiService} from 'src/app/core/service/api.service';
// ApiService importam clasa 
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {


   @Input() receiveobjinrecipe?: Recipe;
// utlizam interfata ca sa aceptam  obiectul cu acleasi proprietatii 

  constructor(public _recipeService: ApiService ) { }




  ngOnInit(): void {
  }

  

}

