import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterRoomData } from '../filter-room-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostfiltrService {

  constructor(private Http: HttpClient) {}

    postFilterData(data: FilterRoomData) {

      return this.Http.post<FilterRoomData>('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', data)
    }

    newFiltrData: any[] = []
}
