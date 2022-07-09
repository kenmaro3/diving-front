import {ISpot} from "../../../types/spot-type";
import {IUser} from "../../../types/user-type";

export interface SpotState{
    isLoading: boolean;
    error: string;
    spots: ISpot[];
    recentSpots: ISpot[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}



export enum SpotActionsEnum{
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_SPOTS = 'SET_SPOTS',
    SET_RECENT_SPOTS = 'SET_RECENT_SPOTS',
    ADD_SPOT = 'ADD_SPOT',
    SET_STATUS = 'SET_STATUS',
    UPDATE_SPOTS = 'UPDATE_SPOTS',
}

export interface UpdateSpots{
    type: SpotActionsEnum.UPDATE_SPOTS,
    payload: IUser
}


export interface SetStatus{
    type: SpotActionsEnum.SET_STATUS,
    payload: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export interface SetAddSpot{
    type: SpotActionsEnum.ADD_SPOT;
    payload: ISpot;
}

export interface SetIsLoading{
    type: SpotActionsEnum.SET_IS_LOADING,
    payload: boolean
}
export interface SetError{
    type: SpotActionsEnum.SET_ERROR,
    payload: string
}
export interface SetSpots{
    type: SpotActionsEnum.SET_SPOTS,
    payload: ISpot[]
}

export interface SetRecentSpots{
    type: SpotActionsEnum.SET_RECENT_SPOTS,
    payload: ISpot[]
}

export type SpotsAction =
    SetIsLoading |
    SetError |
    SetSpots |
    SetRecentSpots |
    SetAddSpot |
    SetStatus |
    UpdateSpots