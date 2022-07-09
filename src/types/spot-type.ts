import { ILike } from "./like-type";
import {IRating} from "./rating-type";

export interface ISpot{
    id: number;
    name: string;
    zip: string;
    prefecture: string;
    address1: string;
    address2: string;
    address3: string;
    access: string;
    parking: string;
    phone: string;
    hp: string;
    close: string;
    open: string;
    min_price: string;
    rental_price: string;
    water: string;
    animal: string;
    activity: string;
    other: string;
    lat: string;
    lng: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    user_ratings: IRating[];
    user_likes: ILike[];
}