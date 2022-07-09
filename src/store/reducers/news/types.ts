import {INews} from "../../../types/news-type";

export interface NewsState{
    isLoading: boolean;
    error: string;
    news: INews[];
    recentNews: INews[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}


export enum NewsActionsEnum{
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_NEWS = 'SET_NEWS',
    SET_RECENT_NEWS = 'SET_RECENT_NEWS',
    SET_STATUS = 'SET_STATUS',
}

export interface SetStatus{
    type: NewsActionsEnum.SET_STATUS,
    payload: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export interface SetIsLoading{
    type: NewsActionsEnum.SET_IS_LOADING,
    payload: boolean
}
export interface SetError{
    type: NewsActionsEnum.SET_ERROR,
    payload: string
}
export interface SetNews{
    type: NewsActionsEnum.SET_NEWS,
    payload: INews[]
}

export interface SetRecentNews{
    type: NewsActionsEnum.SET_RECENT_NEWS,
    payload: INews[]
}

export type NewsAction =
    SetIsLoading |
    SetError |
    SetNews |
    SetRecentNews |
    SetNews |
    SetStatus