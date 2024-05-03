import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TbilisiCartData } from '../tbilisi-cart-data';

@Injectable({
  providedIn: 'root'
})
export class HotelsMenegmentService {

  constructor(private http: HttpClient) {}

  hotelsGetData(){
   return this.http.get<TbilisiCartData[]>('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }
}
