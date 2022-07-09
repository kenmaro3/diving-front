import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "./store/reducers/auth/action-creators";
import AppRoutes from "./components/routes/AppRoutes";
import {fetchAllRatings, fetchTodayRatings, fetchLatestRatings} from "./store/reducers/rating/action-creators";
import {fetchLatestSpots, fetchAllSpots} from "./store/reducers/spot/action-creators";
import { fetchLatestNews, fetchAllNews } from './store/reducers/news/action-creators';
import FallbackComponent from "./components/errorFallback/FallbackComponent";
import {ErrorBoundary} from "react-error-boundary";
import {useNavigate} from "react-router-dom";
import { RootState } from "./store";
import {useAppSelector} from "./hooks";


const App: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isAuth } = useSelector((state: RootState) => state.auth)
  const {user} = useAppSelector(state => state.auth)

  useEffect(() => {
    console.log("dispatch called")
    console.log(`auth: ${isAuth}, user: ${user}`)
    dispatch(fetchAllRatings())
    dispatch(fetchLatestRatings())
    dispatch(fetchAllSpots())
    dispatch(fetchLatestSpots())
    dispatch(fetchLatestNews())
    dispatch(fetchAllNews())

    if(localStorage.getItem('token')){
        dispatch(checkAuth())
    }
  }, [dispatch])

  return(
      <ErrorBoundary FallbackComponent={FallbackComponent} onReset={() => navigate('/')}>
        <AppRoutes/>
      </ErrorBoundary>
  )
};

export default App;
