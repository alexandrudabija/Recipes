import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ParamsArray } from '../Search-filter-service/params-array';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

@Output () onSelect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  cousines = ParamsArray.COUSINES;

  diets = ParamsArray.DIETS;

  intolerances = ParamsArray.INTOLERANCES;

  types = ParamsArray.TYPES;



filters :any = [
  { name: "cuisine", value: [] },
  { name: "diet", value: [] },
  { name: "intolerances", value: [] },
  { name: "type", value: [] },
];



Filter(param: String, name: String): void {
        // <!-- cand facem click noi apelam metoda Filter ,
        // unde se trimite tipul filtrarii  si al doilea argument este (contry din cousines) care se incrementeaza prin for in html  ! -->

          const index :any= this.filters.findIndex((f:any) => f.name === param);
          // aici am gasit  din tabloul filters pentru tipul filtrarii  -> indexul obiectului  

      // daca valoare nu este gasita se returneaza true , daca value nu este deja inserat !
          if (this.isSelected(param, name)) 
          {  
            // inainte sa atribuim in filter valoare la value facem o  verificare 
            // ca numele care il introducem sa nu fie deja existen in array-ul nostru value !
                  this.filters[index].value = this.filters[index].value.filter(
                    (v:any) => v !== name    );
                  
          } 
          // daca valoare este deja inserata ca sa nu stergem toata filstrare si sa putem acumula mai multe filstrarii 
          // facem um push in arrayul cu alter filtrarii !!
          else
          {
            // 
                this.filters[index].value.push(name);
            }
            // aici noi ii transimite tabloul cu argumetii filstrati si  selectati
              this.onSelect.emit(this.filters);
  }
// pentru stergerea totala a filtrelor !
  clean(): void {
    this.filters = this.filters.map((f:any) => {
      f.value = [];
      return f;
    });
    this.onSelect.emit(this.filters);
  }





//  se face ca sa activam ngclasa  daca este selectat sau nu !
  isSelected(param: String, name: String): boolean {
    // din tabloul de obiecte verificam daca parametru a fost selectata (buctarie, intolerance, for diet , for typers) , si daca el este ii 
    // salvam indexul in const index
    const index = this.filters.findIndex((f:any) => f.name === param);


    


// daca indexul o sa reprezinte tipul de selectie (bucatarie , for diet , for types) parametrului  nu este egal se returneaza true , daca este  undefiend se retruneaza false !
// valorea indexului va rapreznta tabloul si tipurile care sun in el -> italiana ,America ...!
    return this.filters[index].value.find((f:any) => f === name) !== undefined;
      // filters[index].value=italiana ,America ...
// filters = [
    //   { name: "cuisine", value: [] },
    //   { name: "diet", value: [] },
    //   { name: "intolerances", value: [] },
    //   { name: "type", value: [] },
    // ];


  }

  menu :any 
  toggle  :any
    active1=false;

  

  open1=false
  open2=false
  open3=false
  open4=false


  firstfilter()
  {
this.open1=!this.open1

  }

  Secondfilter()
  {
this.open2=!this.open2

  }

  therefilter()
  {
this.open3=!this.open3

  }

  fourthfilter()
  {
this.open4=!this.open4

  }



onclik()
{
  this.active1=!this.active1;


}



}



