import React, {FC} from 'react'
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import SpotItem from './spotitem/SpotItem'
import "./spotlist.scss"

interface SpotListProp{
    isMobile: boolean;
}

const SpotList: FC<SpotListProp> = ({isMobile}) => {
    const { isAuth } = useSelector((state: RootState) => state.auth)
    const { recentSpots } = useSelector((state: RootState) => state.spots)
    return (
        <div className={`${isMobile ? "spotListContainerMobile" : "spotListContainer"}`}>
            {
                recentSpots.map((spot) => (
                    <SpotItem spot={spot} isMobile={isMobile}/>

                ))
            }

        </div>

    )
}

export default SpotList