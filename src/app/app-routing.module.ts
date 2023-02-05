import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { OnSelectComponent } from './pages/on-select-ricepe/on-select.component';

const routes: Routes = [
{path: 'index' , component :IndexComponent , title:'index'},
{path:'onselect/:id',component: OnSelectComponent},
{path:'**' , pathMatch:"full", redirectTo:"index"} 

];

// { path: "recipe/:id", component: RecipeInfoComponent },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents= [MainComponent,OnSelectComponent]