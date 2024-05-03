import { Component } from '@angular/core';
import { CartsMenegmentService } from 'src/app/sercvices/carts-menegment.service';
import { CartData } from 'src/app/cart-data';
import { PostfiltrService } from 'src/app/sercvices/postfiltr.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
 constructor (private cartsService: CartsMenegmentService , 
   private fostfiltr: PostfiltrService  ) {}

 cartData: CartData[] = []

 clickroom (tab: string) {
   this.tabName = tab
    this.cartsService.clickDataGet()
    this.cartsService.roomData = this.cartData
    this.fostfiltr.newFiltrData = this.cartData
 }

  tabName = "Home"
  clicTabName(tab: string) {
     this.tabName = tab
  }
}
