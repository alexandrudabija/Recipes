import { Component, OnInit ,Input,Output ,EventEmitter } from '@angular/core';
import { PrepareService } from 'src/app/core/service/prepare.service';
import { Recipe } from 'src/app/core/params-interface-class/RecipeObj';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})


export class BasketComponent implements OnInit {

  @Input() show: boolean = false; // show o sa vina din  app.component !
  // daca este true inseamna ca el se deschide  !

  @Output() onClose = new EventEmitter<any>();
// copil va trimite spre parinte  in app.component.html care va inchide basketul de recete !



  recipes: Recipe[] = this._prepare.recipesToPrepare;
  // recipes  o sa fie un tablou cu parametri Recipe[]  si o sa primeasca continutul tabloului din
  // this._prepare.recipesToPrepare care vine din  PrepareService
  constructor(public _prepare: PrepareService) {}

  ngOnInit() {
    //  console.log(this.recipes);
  }

  closeModal() {
    this.onClose.emit();
  }


  toDelete(id:number) {
    // console.log(id);
    
    this._prepare.removeRecipe(id);
// we update array
    this.recipes=this._prepare.recipesToPrepare;
  }
}
