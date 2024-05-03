import { Component, OnInit } from '@angular/core';
import { HotelsMenegmentService } from 'src/app/service/hotels-menegment.service';
import { TbilisiCartData } from 'src/app/tbilisi-cart-data';

@Component({
  selector: 'app-hotels-page-card',
  templateUrl: './hotels-page-card.component.html',
  styleUrls: ['./hotels-page-card.component.css']
})
export class HotelsPageCardComponent implements OnInit {
   constructor( public hotelsMenegmen: HotelsMenegmentService ) {}
 
   tbilisiCart: TbilisiCartData[] = []

   ngOnInit(): void {
     this.hotelsMenegmen.hotelsGetData().subscribe((data) => {
       this.tbilisiCart = data
       console.log(data)
     })
   }

}
