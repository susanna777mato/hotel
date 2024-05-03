import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';
import { RoomPageService } from './room-page.service';

@Injectable({
  providedIn: 'root'
})
export class CartsMenegmentService {
  constructor(private http: HttpClient,
    public roompage: RoomPageService
    ) {}

  addCartsProducts(){
    return this.http.get<any>('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
  }

  hotelIddSubscription: Subscription | undefined;
    roomData: any[] = [];

    rooms: any[] = [];

    clickRoomData() {
      this.hotelIddSubscription = this.roompage.activeCategoryId.subscribe((hotelId: number | null) => {
        if(hotelId !== null) {
         this.roompage.getfiltrRoomIdData(hotelId).subscribe((response: any) => {
         this.roomData = response.rooms;
            console.log(response.rooms)
         })
        }
     })
    }


  clickDataGet() {
      this.addCartsProducts().subscribe((response) => {
        this.rooms = response;
        console.log(response)
        }) 
  }
}
