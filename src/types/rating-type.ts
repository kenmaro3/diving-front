import {IUser} from "./user-type";
import {ILike} from "./like-type";
import { ISpot } from "./spot-type";

export interface IRating{
    id: number;
    date_and_time_published: Date;
    water_info: string;
    animal_info: string;
    activity_info: string;
    water_rating: number;
    animal_rating: number;
    activity_rating: number;
    other_info: string;
    user: IUser;
    spot: ISpot;
}
