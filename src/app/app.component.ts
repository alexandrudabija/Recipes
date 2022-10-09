
import { Component,OnInit } from '@angular/core';
import {   Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes';

  
  constructor(private router :  Router )  {
    // this.translate.setDefaultLang('en');
    // this.translate.use;
    this.router.navigate(['/main']);


  }
showbasket = false;


ngOnInit()
{

}



translate1()
{}


// se face pentru a deschide si inchide cosul cu recete !
togglebasket() {
  this.showbasket = !this.showbasket;
  // console.log(this.showbasket);
  
}

}
