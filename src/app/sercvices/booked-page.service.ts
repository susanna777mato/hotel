import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookedRooms } from '../booked-rooms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BookedPageService {
constructor(private http: HttpClient) {}

  postRecvaiteBook(data: any){
    return this.http.post('https://hotelbooking.stepprojects.ge/api/Booking',data, { responseType: 'text'}).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 400) {
        Swal.fire("სამწუხაროდ არჩეული თარიღები დაკავებულია")
      }
      else {
        Swal.fire("სამწუხაროდ არჩეული თარიღები დაკავებულია")
      }
      return throwError('შეცდომაა')
    }))
  }

  getBookData() {
    return this.http.get<any>('https://hotelbooking.stepprojects.ge/api/Booking')
  }

  delet(id: any) {
    return this.http.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`, { responseType: 'text'})
  }
}
