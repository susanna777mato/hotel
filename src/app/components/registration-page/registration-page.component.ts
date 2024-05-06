import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, } from 'rxjs';
import { RegistrationPageService } from 'src/app/sercvices/registration-page.service';
import { RoomPageService } from 'src/app/sercvices/room-page.service';
import { BookedRooms } from 'src/app/booked-rooms';
import { BookedPageService } from 'src/app/sercvices/booked-page.service';
import Swal from 'sweetalert2';
import { CartsMenegmentService } from 'src/app/sercvices/carts-menegment.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit, OnDestroy {
  unavailableDates: Date[] = this.registration.idData
  constructor(
    public registration: RegistrationPageService,
    private roompage: RoomPageService,
    private postRecvest: BookedPageService,
    public carts: CartsMenegmentService
  ) {}

  caruselImageSubscritption: Subscription | undefined;
  caruselImg: any = [];

  minDate = '';
  checkInDate = '';
  checkOutDate = '';
  totalPrice = 0;
  isConfirmed = true;
  customerName: any;
  customerId = '';
  customerPhone: any;
  roomID = 0;
  cheko = ""

  priceNight: any;
  images1: any[] = [];
  name = '';
  id: number = 0;
  delet: any[] = [];
  roomtype: number = 0;

  imgHotel: any[] = []
  hotelName = ''

  lastPhoto: any = [];

  idDeletItem: number = 0;
  img3Fotos: any

  allData: any


  ngOnInit(): void {
    this.caruselImageSubscritption = this.roompage.cartsRoomId.subscribe(
      (carusel: number | null) => {
        this.registration
          .registrationCaruselImage(carusel as number)
          .subscribe((response: any) => {
            console.log(response);
            this.name = response.name;
            this.roomtype = response.roomTypeId
            this.images1 = response.images[0].source;
            this.customerId = response.name;
            this.priceNight = response.pricePerNight;
            this.idDeletItem = response.id;
            this.roomID = response.id;
            this.caruselImg = response.images;
            console.log(this.priceNight);
          });
      }
    );

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.minDate = `${yyyy}-${mm}-${dd}`;

  }

 

  clickDate() {
    const date1 = new Date(this.checkInDate);
    const date2 = new Date(this.checkOutDate);
    const differenceInDays = Math.abs(
      (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
    );

    this.totalPrice = differenceInDays * this.priceNight;
  }

  
  restartData() {
    this.checkInDate = '';
    this.checkOutDate = '';
    this.totalPrice = 0;
    this.customerName = '';
    this.customerId = '';
    this.customerPhone = '';
    this.roomID = 0;
  }


  dataYestOnit() {
    this.registration.registrData = [
      {
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        totalPrice: this.totalPrice,
        isConfirmed: this.isConfirmed,
        customerName: this.customerName,
        customerId: this.customerId,
        customerPhone: this.customerPhone,
        roomID: this.roomID
      },
    ];

    console.log(this.registration.registrData);


    if(this.registration.registrData.includes(this.allData)) {
      console.log( "aba")
      Swal.fire("სამწუხაროდ არჩეული თარიღები უკვე დაკავებულია")
      this.restartData()
}
     if (this.customerName === "" && this.customerPhone === "" ) {
      Swal.fire("მონაცემების შეყვანა აუცილებელია!")
      return
    }

    else if(isNaN(this.customerPhone) ) {
      Swal.fire("გთხოვთ შეიყვანოთ ტელეფონის ნომერი")
      return
    }

    else if(!isNaN(this.customerName) ) {
      Swal.fire("სახელი უნდა ოყოს დაწერილი მხოლოდ ასოებით")
      return
    }

    for (const item of this.registration.registrData) {
      this.postRecvest.postRecvaiteBook(item).subscribe((response: any) => {
        console.log("es pirvelia" + response)
        this.postRecvest.getBookData().subscribe((response) => {
            this.allData = [response]
          const pric = response[response.length - 1];
          this.registration.hotelIdData = this.images1;
          this.registration.deletId = this.idDeletItem;
          this.registration.roomTypeId.next(this.roomtype)
          this.registration.idData.push(pric);
          console.log(this.registration.idData);

           Swal.fire('გილოცავთ ოთახი წარმატებით დაიჯავშნა');
           this.restartData()
        });
      });
  }
  }
  ngOnDestroy(): void {
    if(this.caruselImageSubscritption) {
      this.caruselImageSubscritption.unsubscribe()
    }
  }
}
