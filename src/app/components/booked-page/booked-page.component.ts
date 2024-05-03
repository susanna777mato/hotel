import { Component, OnInit} from '@angular/core';
import { BookedPageService } from 'src/app/sercvices/booked-page.service';
import { BookedRooms } from 'src/app/booked-rooms';
import { RegistrationPageService } from 'src/app/sercvices/registration-page.service';
import { RoomPageService } from 'src/app/sercvices/room-page.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booked-page',
  templateUrl: './booked-page.component.html',
  styleUrls: ['./booked-page.component.css']
})
export class BookedPageComponent implements OnInit {
    constructor( private postbooked: BookedPageService ,
      public registr: RegistrationPageService,
      private room: RoomPageService,
      private route: ActivatedRoute
    ) {}

   checkInDate: any
   checkOutDate = ""
   
   imgHotel: any[] = []

  
   img: any
   names: any




    ngOnInit(): void {
      for (const item of this.registr.idData) {
       item.checkInDate = item.checkInDate.slice(0, 10)
      item.checkOutDate = item.checkOutDate.slice(0, 10)
      }
        
     
          this.registr.roomTypeId.subscribe (
          (hotel: number | null) => {
            this.room.getfiltrRoomIdData(hotel as number).subscribe(
              (response) => {
                this.imgHotel = response.featuredImage
                this.names = response.name
                console.log(this.imgHotel)
              }
            )
          }
        ) 

    }
     

    objectKeys(obj: any): any {
       return Object.keys(obj)
    }


    objectEntries(obj: any): [string, any][] {
      return Object.entries(obj);
    }



   clickDelet(id: number) {
    this.registr.idData = this.registr.idData.filter((item) => item.id !== id)
    this.postbooked.delet(id).subscribe((response) => {
      console.log(response)
    })
   }

   myArry = Object.entries(this.registr.hotelIdData)
  
}
