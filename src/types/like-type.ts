import {IUser} from "./user-type";
import {ISpot} from "./spot-type";

export interface ILike{
    id: number;
    user: IUser;
    spot: ISpot;
}