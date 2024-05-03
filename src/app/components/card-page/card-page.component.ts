import { Component, OnInit } from '@angular/core';
import { RoomPageService } from 'src/app/sercvices/room-page.service';
import { Subscription } from 'rxjs';
import { CartsMenegmentService } from 'src/app/sercvices/carts-menegment.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent {
   constructor( public cartsServis : CartsMenegmentService, ) {}
 

 }


