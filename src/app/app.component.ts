
import { Component } from '@angular/core';
import {   Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes';


  constructor(private router :  Router )  {
 
    this.router.navigate(['/index']);


  }
showbasket = false;



translate1()
{}


// se face pentru a deschide si inchide cosul cu recete !
togglebasket() {
  this.showbasket = !this.showbasket;

}

}
