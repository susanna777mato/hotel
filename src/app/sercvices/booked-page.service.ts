import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookedRooms } from '../booked-rooms';

@Injectable({
  providedIn: 'root'
})
export class BookedPageService {
constructor(private http: HttpClient) {}

  postRecvaiteBook(data: any){
    return this.http.post('https://hotelbooking.stepprojects.ge/api/Booking',data, { responseType: 'text'})
  }

  getBookData() {
    return this.http.get<any>('https://hotelbooking.stepprojects.ge/api/Booking')
  }

  delet(id: any) {
    return this.http.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`, { responseType: 'text'})
  }
}
