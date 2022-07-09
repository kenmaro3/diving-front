import {IRating} from "./rating-type";

export interface IUser{
    id: number;
    user_name: string;
    email: string;
    role: string;
    profile_picture: string;
    ratings: IRating[];
    description: string;
    favorite: string;
    twitter: string;
}