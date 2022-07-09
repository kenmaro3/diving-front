import {
    NewsActionsEnum,
    NewsAction,
    SetError,
    SetIsLoading,
    SetNews,
    SetRecentNews,
    SetStatus,
} from "./types";

import {INews} from "../../../types/news-type";
import {AppDispatch} from "../../index";
import NewsService from "../../../services/news-service";
import {IUser} from "../../../types/user-type";
import {ILike} from "../../../types/like-type";



export const setError = (error: string): SetError => {
    return {type: NewsActionsEnum.SET_ERROR, payload: error}
}

export const setIsLoading = (isLoading: boolean): SetIsLoading => {
    return {type: NewsActionsEnum.SET_IS_LOADING, payload: isLoading}
}

export const setRecentNews = (ratings: INews[]): SetRecentNews => {
    return {type: NewsActionsEnum.SET_RECENT_NEWS, payload: ratings}
}

export const setNews = (ratings: INews[]): SetNews => {
    return {type: NewsActionsEnum.SET_NEWS, payload: ratings}
}

export const setStatus = (status: 'idle' | 'loading' | 'succeeded' | 'failed'): SetStatus => {
    return {type: NewsActionsEnum.SET_STATUS, payload: status}
}


export const fetchAllNews = () => async(dispatch: AppDispatch) => {
    dispatch(setStatus('loading'))
    try{
        const response = await NewsService.getAll()
        dispatch(setStatus('succeeded'))
        dispatch(setNews(response.data))
    }catch(e: any){
        dispatch(setError(e.response.data.message))
        dispatch(setStatus('failed'))
    }
}

export const fetchLatestNews = () => async(dispatch: AppDispatch) => {
    dispatch(setStatus('loading'))
    try{
        const response = await NewsService.getLatests(3)
        dispatch(setStatus('succeeded'))
        dispatch(setRecentNews(response.data))
    }catch(e: any){
        dispatch(setError(e.response.data.message))
        dispatch(setStatus('failed'))
    }
}

