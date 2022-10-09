import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class filter2 {
  constructor() {}
// se duce spre home.component !
  transformToQuery(ParamsArray:any) {
    let params:any = {};
// ajunge tabloul cu parametri selectati 
    for (let param of ParamsArray) {
      // iteram valoarea din tabloul ca sa apelam obiectele din tablou
      if (param.value.length > 0) {
// daca tabloul din obiect are mai multe valori de 1  

        params[param.name] = param.value.join();
        // in felul urmator adaugam  tipul de filtrare si prin (=) noi atribuim valoare , 
        // prin join() adaugam virgula la inceputul valorii 
      }
    }
    console.log(params);
    
    return params;
  }
}