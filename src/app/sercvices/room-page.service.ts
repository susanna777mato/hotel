import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavCategory } from '../nav-category';
import { CartData } from '../cart-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { AllDataItem } from '../all-data-item';

@Injectable({
  providedIn: 'root'
})
export class RoomPageService {

  constructor(private http: HttpClient) {}
  
  activeCategoryId = new BehaviorSubject<number | null>(null);
  cartsRoomId = new BehaviorSubject<number | null>(null);

  getRoomNames() {
    return this.http.get<NavCategory[]>('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes')
  } 

  getfiltrRoomIdData( id: number ) {
    return this.http.get<any>(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  }
}
 