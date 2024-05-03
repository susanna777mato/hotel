import { Component, OnInit } from '@angular/core';
 import { CartsMenegmentService } from 'src/app/sercvices/carts-menegment.service';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit  {
   constructor(
      public cartsMenegment: CartsMenegmentService
       ) {}
   

       rooms: any = [];
   
       ngOnInit(): void {
          this.cartsMenegment.addCartsProducts().subscribe((response) => {
          this.rooms = response;
          console.log(response)
   
          })
       }
}
