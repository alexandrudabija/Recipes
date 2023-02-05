import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // clasa copil  va trimite spre parinte !
  @Output() onOpen = new EventEmitter<any>();

  constructor() {}


  lang: any;




  ngOnInit() {

    
    this.lang = localStorage.getItem('lang') || 'en';
  }
  toggle() {
    this.onOpen.emit();
  }

  changeLang(lang: any) {
    // console.log(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }












}
