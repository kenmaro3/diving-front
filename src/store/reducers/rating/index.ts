import {RatingActionsEnum, RatingsAction, RatingSortActions, RatingState} from "./types";
import RatingService from "../../../services/rating-service";

const initialState: RatingState = {
    error: '',
    isLoading: false,
    ratings: [],
    recentRatings: [],
    sortType: RatingSortActions.SORT_BY_TIME,
    status: 'idle',
    todayRatings: []
}

export default function ratingsReducer(state = initialState, action: RatingsAction): RatingState{
    switch(action.type){
        case RatingActionsEnum.UPDATE_RATINGS:
            return {...state, ratings: RatingService.updateRatingsById(action.payload, state.ratings)}
        case RatingActionsEnum.ADD_RATING:
            return {...state, ratings: state.ratings.concat(action.payload)}
        case RatingActionsEnum.SET_STATUS:
            return {...state, status: action.payload}
        case RatingActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case RatingActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case RatingActionsEnum.SET_RATINGS:
            return {...state, ratings: action.payload}
        case RatingActionsEnum.SET_RECENT_RATINGS:
            return {...state, recentRatings: action.payload}
        case RatingActionsEnum.SET_TODAY_RATINGS:
            return {...state, todayRatings: action.payload}
        default:
            return state
    }
}