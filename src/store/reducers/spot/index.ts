import {SpotActionsEnum, SpotsAction, SpotState} from "./types";
import SpotService from "../../../services/spot-service";

const initialState: SpotState = {
    error: '',
    isLoading: false,
    spots: [],
    recentSpots: [],
    status: 'idle',
}

export default function spotsReducer(state = initialState, action: SpotsAction): SpotState{
    switch(action.type){
        case SpotActionsEnum.UPDATE_SPOTS:
            // return {...state, spots: SpotService.updateSpot(action.payload, state.spots)}
            return {...state}
        case SpotActionsEnum.ADD_SPOT:
            return {...state, spots: state.spots.concat(action.payload)}
        case SpotActionsEnum.SET_STATUS:
            return {...state, status: action.payload}
        case SpotActionsEnum.SET_ERROR:
            return {...state, error: action.payload}
        case SpotActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case SpotActionsEnum.SET_SPOTS:
            return {...state, spots: action.payload}
        case SpotActionsEnum.SET_RECENT_SPOTS:
            return {...state, recentSpots: action.payload}
        default:
            return state
    }
}