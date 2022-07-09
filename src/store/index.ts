import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import authReducer from "./reducers/auth";
import ratingsReducer from "./reducers/rating";
import spotsReducer from "./reducers/spot";
import newsReducer from "./reducers/news";

const rootReducer = combineReducers({
    auth: authReducer,
    ratings: ratingsReducer,
    spots: spotsReducer,
    news: newsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch