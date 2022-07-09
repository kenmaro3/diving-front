import {
    SpotActionsEnum,
    SpotsAction,
    SetAddSpot,
    SetError,
    SetIsLoading,
    SetSpots,
    SetRecentSpots,
    SetStatus,
    UpdateSpots
} from "./types";
import {ISpot} from "../../../types/spot-type";
import {AppDispatch} from "../../index";
import SpotService from "../../../services/spot-service";
import {IUser} from "../../../types/user-type";
import {ILike} from "../../../types/like-type";


export const setError = (error: string): SetError => {
    return {type: SpotActionsEnum.SET_ERROR, payload: error}
}

export const setIsLoading = (isLoading: boolean): SetIsLoading => {
    return {type: SpotActionsEnum.SET_IS_LOADING, payload: isLoading}
}

export const setSpots = (spots: ISpot[]): SetSpots => {
    return {type: SpotActionsEnum.SET_SPOTS, payload: spots}
}

export const setRecentSpots = (spots: ISpot[]): SetRecentSpots => {
    return {type: SpotActionsEnum.SET_RECENT_SPOTS, payload: spots}
}

export const setStatus = (status: 'idle' | 'loading' | 'succeeded' | 'failed'): SetStatus => {
    return {type: SpotActionsEnum.SET_STATUS, payload: status}
}

export const setAddSpot = (post: ISpot): SetAddSpot => {
    return {type: SpotActionsEnum.ADD_SPOT, payload: post}
}

export const setUpdateSpots = (user: IUser): UpdateSpots => {
    return {type: SpotActionsEnum.UPDATE_SPOTS, payload: user}
}

export const fetchAllSpots = () => async(dispatch: AppDispatch) => {
    dispatch(setStatus('loading'))
    try{
        const response = await SpotService.getAll()
        dispatch(setStatus('succeeded'))
        dispatch(setSpots(response.data))
    }catch(e: any){
        dispatch(setError(e.response.data.message))
        dispatch(setStatus('failed'))
    }
}

export const fetchLatestSpots = () => async(dispatch: AppDispatch) => {
    try{
        const response = await SpotService.getLatests(3)
        dispatch(setStatus('succeeded'))
        dispatch(setRecentSpots(response.data))
    }catch(e: any){
        dispatch(setError(e.response.data.message))
        dispatch(setStatus('failed'))
    }
}



