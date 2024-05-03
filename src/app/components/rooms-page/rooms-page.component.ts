import { Component, OnInit, importProvidersFrom, OnDestroy, Output, EventEmitter } from '@angular/core';
import { RoomPageService } from 'src/app/sercvices/room-page.service';
import { NavCategory } from 'src/app/nav-category';
import { Subscription, elementAt } from 'rxjs';
import { AllDataItem } from 'src/app/all-data-item';
import { CartData } from 'src/app/cart-data';
import { CartsMenegmentService } from 'src/app/sercvices/carts-menegment.service';
import { FilterRoomData } from 'src/app/filter-room-data';
import { PostfiltrService } from 'src/app/sercvices/postfiltr.service';
import { RegistrationPageService } from 'src/app/sercvices/registration-page.service';


@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.css']
})
export class RoomsPageComponent implements OnInit {
    constructor (public roompage: RoomPageService,
       public cartsServis: CartsMenegmentService,
       public saveFiltr: PostfiltrService,
       private register: RegistrationPageService
      ) {}

    
    categoryData: NavCategory[] = []
    dataList: CartData[] = []

  ngOnInit(): void {
    this.roompage.getRoomNames().subscribe((response) => {
      this.categoryData = response
    })


      
     this.cartsServis.clickRoomData()

     
     const today = new Date();
     const dd = String(today.getDate()).padStart(2, "0");
     const mm = String(today.getMonth() +1).padStart(2, "0")
     const yyyy = today.getFullYear();
     this.minDate = `${yyyy}-${mm}-${dd}`

  }

  priceFrom  = 0
  priceTo = 1000

  navElement = "All"
  checkIn  = ""
  checkOut  = ""
  maximumGuests  = 0
  roomTypeId  = 0

   isoDate: any = [];
   dataItem: FilterRoomData[] = []
   minDate: string = ""

     clickDataPost () {
      this.cartsServis.rooms = this.dataList
      this.cartsServis.roomData = this.dataList
        this.dataItem  = [ {
        roomTypeId: this.roomTypeId,
        priceFrom: this.priceFrom,
        priceTo: this.priceTo,
        maximumGuests: this.maximumGuests,
        checkIn: this.checkIn,
        checkOut: this.checkOut
       } ]
       
       if(this.checkIn > this.checkOut) {
        alert("ჩაწერეთ ვალიდური მნიშვნელობა, რომელ რიცხვიდან რომელ რიცხვამდე გსურთ")
        return
      }
      for (const item of this.dataItem) {
           this.saveFiltr.postFilterData(item).subscribe((response: any) => {
           this.saveFiltr.newFiltrData = response
          console.log(response)
        })
      }
     }

  
  clickHandler(name: string) {
     this.navElement = name
  }

  resetClick() {
   this.priceFrom  = 0
   this. priceTo = 1000
   this.navElement = "All"
   this.checkIn = ""
   this.checkOut = ""
   this.maximumGuests = 0
   this.roomTypeId = 0
   this.cartsServis.rooms = this.dataList
   this.saveFiltr.newFiltrData = this.dataList
   this.cartsServis.roomData = this.dataList
  }

   
  clickCardsData( id: number) {
    this.roompage.cartsRoomId.next(id)
  }



  clickData(name: string, id:number) {
    this.navElement = name
    this.roomTypeId = id
    this.roompage.activeCategoryId.next(id);
    this.cartsServis.rooms = this.dataList
    this.saveFiltr.newFiltrData = this.dataList
  }
}

