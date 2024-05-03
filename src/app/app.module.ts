import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartsComponent } from './components/carts/carts.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsPageCardComponent } from './components/hotels-page-card/hotels-page-card.component';
import { RouterModule, Routes } from '@angular/router';
import { RoomsPageComponent } from './components/rooms-page/rooms-page.component';
import { BookedPageComponent } from './components/booked-page/booked-page.component';
import { FormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: CartsComponent,
  },
  {
    path: 'Hotel-page',
    component: HotelsPageCardComponent,
  },
  {
    path: 'Room-page',
    component: RoomsPageComponent,
  },
  {
    path: "Booked-page",
    component: BookedPageComponent,
  },
  {
    path: "registr-page",
    component: RegistrationPageComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartsComponent,
    HotelsPageCardComponent,
    RoomsPageComponent,
    RegistrationPageComponent,
    CardPageComponent ,
    BookedPageComponent,
    FooterComponent
  ],
  imports: [BrowserModule, FormsModule , RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
