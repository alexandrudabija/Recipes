import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from 'src/app/core/service/api.service'; 
import { PrepareService } from 'src/app/core/service/prepare.service';

@Component({
  selector: 'app-on-select',
  templateUrl: './on-select.component.html',
  styleUrls: ['./on-select.component.scss']
})
export class OnSelectComponent implements OnInit {

  id: any; 
  recipe: any;

  targetLanguage=(localStorage.getItem('lang')||'en');
  translatedText='';


  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public _recipes: ApiService,
    public _prepare: PrepareService ,
    private http:HttpClient
  ) {}


  



// cand am selectat componenta cu receta si vream sa o deschidem , la click se ia 
// id-ul si se trimite pentru a avea info de gatire a recetei !
ngOnInit() {
  this.route.params.subscribe((params) => {
    this.id = params["id"];
    if (!this.id) {
      this.router.navigateByUrl("/");
    }

//       if(JSON.parse(localStorage.getItem('res') || '[]') =='' )
// { }
// merge spre rerecipes.service.ts
  //  this.recipeSubscription =
    this._recipes
      .getRecipe(this.id)
      .subscribe((res) => {
        this.recipe = res;
        // localStorage.setItem("res",JSON.stringify(res));

        // console.log(res);
        
      });




// else {console.log("use local data !");}




  });
}




toPrepare() {
  this._prepare.addRecipe({
    id: this.recipe.id,
    title: this.recipe.title,
    readyInMinutes: this.recipe.readyInMinutes,
    image: this.recipe.image,
  });
}

toDelete() {
  this._prepare.removeRecipe(this.recipe.id);
}
// verificam daca este pe in cos receta apeland metoda din clasa prepare!
isOnList(): boolean {
  return this._prepare.recipeExists({ id: this.recipe.id });
}












// translate()
// {
//   this.http.post('https://translation.googleapis.com/language/translate/v2?key='+environment.apikey,{

//     "q": [this.translatedText],
//     "target": this.targetLanguage
//   }).subscribe((response:any) => {

//     this.translatedText=response.data.translatons[0].translatedText
//   })

// }

}






