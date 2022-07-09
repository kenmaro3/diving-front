import React, { FC, useState, useEffect } from 'react';
import './searchspotlist.scss'
import SpotItem from "../spotlist/spotitem/SpotItem";
import { motion } from "framer-motion";

import { ISpot } from '../../types/spot-type';


interface SearchSpotListProps {
    propSpots: ISpot[];
    isMobile: boolean;
    
}


const SearchSpotList: FC<SearchSpotListProps> = ({propSpots, isMobile}) => {
    const [spots, setSpots] = useState<ISpot[]>([])
    const [spotsCount, setSpotsCount] = useState<number>(0)

    useEffect(() => {
        if (propSpots != undefined) {

            setSpots(propSpots)
            setSpotsCount(propSpots.length)
        }
    }, [propSpots])

    return (
        <div className={`${isMobile? "searchSpotListContainerMobile" : "searchSpotListContainer"}`}>
            <div className="searchSpotListHeader">
                {spotsCount} Spots Found

            </div>
            <div className={'spotList'}>
                {
                    spots.map(spot =>
                        <motion.div key={spot.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            {/* <SpotItem isMobile={isMobile}/> */}
                        </motion.div>)

                }
            </div>

        </div>
    );
};

export default SearchSpotList;