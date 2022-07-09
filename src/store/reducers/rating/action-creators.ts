import {
    RatingActionsEnum,
    RatingsAction,
    RatingSortActions,
    SetAddRating,
    SetError,
    SetIsLoading,
    SetRatings,
    SetRecentRatings,
    SetStatus,
    SetTodayRatings,
    UpdateLikes,
    UpdateRatings
} from "./types";

import {IRating} from "../../../types/rating-type";
import {AppDispatch} from "../../index";
import RatingService from "../../../services/rating-service";
import {IUser} from "../../../types/user-type";
import {ILike} from "../../../types/like-type";


export const setSort = (sortType: RatingSortActions): RatingsAction => {
    if(sortType === RatingSortActions.SORT_BY_LIKES)
        return {type: RatingSortActions.SORT_BY_LIKES}
    if(sortType === RatingSortActions.SORT_BY_COMMENTS)
        return {type: RatingSortActions.SORT_BY_COMMENTS}
    else
        return {type: RatingSortActions.SORT_BY_TIME}
}


export const setTodayRatings = (ratings: IRating[]): SetTodayRatings => {
    return {type: RatingActionsEnum.SET_TODAY_RATINGS, payload: ratings}
}

export const setError = (error: string): SetError => {
    return {type: RatingActionsEnum.SET_ERROR, payload: error}
}

export const setIsLoading = (isLoading: boolean): SetIsLoading => {
    return {type: RatingActionsEnum.SET_IS_LOADING, payload: isLoading}
}

export const setRecentRatings = (ratings: IRating[]): SetRecentRatings => {
    return {type: RatingActionsEnum.SET_RECENT_RATINGS, payload: ratings}
}

export const setRatings = (ratings: IRating[]): SetRatings => {
    return {type: RatingActionsEnum.SET_RATINGS, payload: ratings}
}

export const setStatus = (status: 'idle' | 'loading' | 'succeeded' | 'failed'): SetStatus => {
    return {type: RatingActionsEnum.SET_STATUS, payload: status}
}

export const setAddRating = (rating: IRating): SetAddRating => {
    return {type: RatingActionsEnum.ADD_RATING, payload: rating}
}

export const setUpdateRatings = (user: IUser): UpdateRatings => {
    return {type: RatingActionsEnum.UPDATE_RATINGS, payload: user}
}

export const updateLikes = (like: ILike): UpdateLikes => {
    return {type: RatingActionsEnum.UPDATE_LIKES, payload: like}
}

export const fetchAllRatings = () => async(dispatch: AppDispatch) => {
    dispatch(setStatus('loading'))
    try{
        const response = await RatingService.getAll()
        dispatch(setStatus('succeeded'))
        dispatch(setRatings(response.data))
    }catch(e: any){
        dispatch(setError(e.response.data.message))
        dispatch(setStatus('failed'))
    }
}

export const fetchLatestRatings = () => async(dispatch: AppDispatch) => {
    dispatch(setStatus('loading'))
    try{
        const response = await RatingService.getLatests(3)
        dispatch(setStatus('succeeded'))
        dispatch(setRecentRatings(response.data))
    }catch(e: any){
        dispatch(setError(e.response.data.message))
        dispatch(setStatus('failed'))
    }
}


export const fetchTodayRatings = (quantity: number) => async(dispatch: AppDispatch) => {
    try{
        const ratings = await RatingService.getTodayRatings(quantity)
        dispatch(setTodayRatings(ratings.data))
    }catch(e: any){
        console.log(e.response)
    }
}



