import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookedRooms } from '../booked-rooms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationPageService {

  hotelIdData: any = []

  registrData: BookedRooms[] = []

  dataFinalItem: any[] = []

  totilePrice: any[] = []

  idData: any[] = []

  photoUrl:any

  deletId: number = 0


  roomTypeId = new BehaviorSubject<number | null>(null);

  img: any[] = []
  name: any

  constructor(
    private http: HttpClient
  ) {}

  registrationCaruselImage( id: number ) {
    return this.http.get<any>(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }

  alreadyBooked() {
    return this.http.get<any>('https://hotelbooking.stepprojects.ge/api/Booking')
  }
}