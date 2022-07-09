import React from 'react'
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import SpotItem from './spotitem/SpotItem'
import "./spotlist.scss"

const SpotList = () => {
    const { isAuth } = useSelector((state: RootState) => state.auth)
    const { recentSpots } = useSelector((state: RootState) => state.spots)
    return (
        <div className="spotListContainer">
            {
                recentSpots.map((spot) => (
                    <SpotItem spot={spot}/>

                ))
            }

        </div>

    )
}

export default SpotList