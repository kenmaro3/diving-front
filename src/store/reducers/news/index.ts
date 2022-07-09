import {NewsActionsEnum, NewsAction, NewsState} from "./types";
import NewsService from "../../../services/rating-service";

const initialState: NewsState = {
    error: '',
    isLoading: false,
    news: [],
    recentNews: [],
    status: 'idle',
}

export default function ratingsReducer(state = initialState, action: NewsAction): NewsState{
    switch(action.type){
        case NewsActionsEnum.SET_STATUS:
            return {...state, status: action.payload}
        case NewsActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case NewsActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case NewsActionsEnum.SET_NEWS:
            return {...state, news: action.payload}
        case NewsActionsEnum.SET_RECENT_NEWS:
            return {...state, recentNews: action.payload}
        default:
            return state
    }
}