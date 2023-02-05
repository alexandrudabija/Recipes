import { Injectable } from "@angular/core";
import { Recipe } from "src/app/core/params-interface-class/RecipeObj";
// importam obiectul din Recipe ca sa-l setam si apoi o sa-l falosim in main !

@Injectable({
  providedIn: "root",
})
export class PrepareService {
  constructor() {
    

  }
  // here is the crud  for basket 

  private _recipesToPrepare: Recipe[] = JSON.parse(localStorage.getItem('recipesToPrepare') || '[]') || [];
  // _recipesToPrepare este de tip obiect recipe 
  public currentRecipe :any= null;
  timer :any= null;

  get recipesToPrepare(): Recipe[] {
    return this._recipesToPrepare;
  }

  set recipesToPrepare(r) {
    this._recipesToPrepare = r;
  }

  addRecipe(recipe: Recipe) {
    if (this.recipeExists(recipe)) {
      return;
    }
    clearTimeout(this.timer);
    this.recipesToPrepare?.push(recipe);
    this.currentRecipe = recipe;
    localStorage.setItem("recipesToPrepare",JSON.stringify(this._recipesToPrepare))
    this.timer = setTimeout(() => {
      this.currentRecipe = null;
    }, 3000);
  }

  removeRecipe(id: number) {
    this.recipesToPrepare = this.recipesToPrepare.filter(
      (r: Recipe) => r.id !== id
    );

    // console.log(this.recipesToPrepare);
    
    localStorage.setItem("recipesToPrepare",JSON.stringify(this._recipesToPrepare))

  }






  
// daca exista receta !
  recipeExists(recipe: Recipe): boolean {
    const index = this.recipesToPrepare.findIndex((r) => r.id === recipe.id);
    return index !== -1;
    // returnam indexul tru sau false ! , o sa ne trebuiasca la addRecipe 
  }
}
