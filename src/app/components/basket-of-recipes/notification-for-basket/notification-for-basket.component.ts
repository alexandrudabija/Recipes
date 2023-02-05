import { Component, OnInit } from '@angular/core';
import { PrepareService } from 'src/app/core/service/prepare.service';
import {
  trigger,

  style,
  animate,
  transition,
} from "@angular/animations";



@Component({
  selector: 'app-notification-for-basket',
  templateUrl: './notification-for-basket.component.html',
  styleUrls: ['./notification-for-basket.component.scss'],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ height: 85, opacity: 0 }),
        animate("0.5s ease-out", style({ height: 85, opacity: 1 })),
      ]),
      transition(":leave", [
        style({ height: 85, opacity: 1 }),
        animate("0.4s ease-in", style({ height: 85, opacity: 0 })),
      ]),
    ]),
  ],
})
export class NotificationForBasketComponent implements OnInit {

  constructor(public _prepare: PrepareService) { }

  ngOnInit(): void {
    // console.log(this._prepare);
    
  }

}
