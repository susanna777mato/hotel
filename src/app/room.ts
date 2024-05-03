import { BookedData } from "./booked-data";
import { CartData } from "./cart-data";

export interface Room {
    id: number;
    name: string;
    hotelId: number;
    roomTypeId: number;
    pricePerNight: number
    available: boolean;
    maximumGuests: BookedData[];
    images: CartData[]
}
