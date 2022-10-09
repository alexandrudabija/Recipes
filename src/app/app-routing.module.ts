import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { OnSelectComponent } from './pages/on-select-ricepe/on-select.component';

const routes: Routes = [
{path: 'main' , component :MainComponent , title:'main'},
{path:'onselect/:id',component: OnSelectComponent},
{path:'**' , pathMatch:"full", redirectTo:"main"} 

];

// { path: "recipe/:id", component: RecipeInfoComponent },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents= [MainComponent,OnSelectComponent]