import {IUser} from "../../../types/user-type";
import {ILike} from "../../../types/like-type";
import {IRating} from "../../../types/rating-type";

export interface RatingState{
    isLoading: boolean;
    error: string;
    ratings: IRating[];
    recentRatings: IRating[];
    sortType: RatingSortActions;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    todayRatings: IRating[];
}


export enum RatingSortActions{
    SORT_BY_TIME = 'SORT_BY_TIME',
    SORT_BY_LIKES = 'SORT_BY_LIKES',
    SORT_BY_COMMENTS = 'SORT_BY_COMMENTS',
}

export enum RatingActionsEnum{
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_RATINGS = 'SET_RATINGS',
    SET_RECENT_RATINGS = 'SET_RECENT_RATINGS',
    ADD_RATING = 'ADD_RATING',
    SET_STATUS = 'SET_STATUS',
    SET_TODAY_RATINGS = 'SET_TODAY_RATINGS',
    UPDATE_RATINGS = 'UPDATE_RATINGS',
    UPDATE_COMMENTS = 'UPDATE_COMMENTS',
    UPDATE_LIKES = 'UPDATE_LIKES'
}

export interface UpdateLikes{
    type: RatingActionsEnum.UPDATE_LIKES,
    payload: ILike
}

export interface UpdateRatings{
    type: RatingActionsEnum.UPDATE_RATINGS,
    payload: IUser
}


export interface SetTodayRatings{
    type: RatingActionsEnum.SET_TODAY_RATINGS,
    payload: IRating[]
}

export interface SetStatus{
    type: RatingActionsEnum.SET_STATUS,
    payload: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export interface SetAddRating{
    type: RatingActionsEnum.ADD_RATING;
    payload: IRating;
}

export interface SetSort{
    type: RatingSortActions
}

export interface SetIsLoading{
    type: RatingActionsEnum.SET_IS_LOADING,
    payload: boolean
}
export interface SetError{
    type: RatingActionsEnum.SET_ERROR,
    payload: string
}
export interface SetRatings{
    type: RatingActionsEnum.SET_RATINGS,
    payload: IRating[]
}

export interface SetRecentRatings{
    type: RatingActionsEnum.SET_RECENT_RATINGS,
    payload: IRating[]
}

export type RatingsAction =
    SetIsLoading |
    SetError |
    SetRatings |
    SetRecentRatings |
    SetSort |
    SetAddRating |
    SetStatus |
    SetTodayRatings |
    UpdateRatings |
    UpdateLikes