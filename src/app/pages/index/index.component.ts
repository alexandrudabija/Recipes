import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { filter2 } from 'src/app/components/filter/Search-filter-service/filter2.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  objsfrommain: any[] = [];

  // dupa ce se parcuge salvam totoate obiecte in array-ul dat !

  constructor(private dataservice: ApiService, private filter: filter2) {}

  ngOnInit() {
    //  this.translate.addLangs(['en','ro','ru','it'])
    //     this.translate.setDefaultLang('en');

    // const browserleng = this.translate.getBrowserLang()
    // console.log(browserleng);
    // this.translate.use(browserleng?.match(/en|ro/) ? browserleng :'en');
    // this.translate.use(localStorage.getItem('lang')||'en');

    this.dataservice.randomRecipes(35).subscribe((e: any) => {
      // console.log(e);
      //   console.log(' ce este din api ', e.recipes );
      this.objsfrommain = e.recipes;

      // console.log('ce este in tablouls din main ' , this.objsfrommain );
    });
  }

  // se face pentru a face un request spre api cu un anumit filter

  selectFilter($e: any): void {
    // console.log($e);

    this.dataservice
      .search(
        // search vine din recipes.service.ts unde returneaza  parte din site pentru a putea folosi tabloul
        // $e este tabloul cu parametri
        this.filter.transformToQuery($e)
      ) //transformToQuery vine din filter2 !
      .subscribe((res: any) => (this.objsfrommain = res.results));
  }
  //  exmplu de ce se va returna
  // https://api.spoonacular.com/recipes/complexSearch?cuisine=Latin%20American,Mexican&apiKey=f837dfea39b54fec8772ecfd11bbc0a0
}
