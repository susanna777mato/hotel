import { Room } from "./room";

export interface Hotel {
    id: number;
    name: string;
    address: string
    city: string;
    featuredImage: string;
    rooms: Room[];
}
