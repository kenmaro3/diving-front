import React from 'react'
import Rating from '../rating/Rating'
import RatingItem from '../../components/ratinglist/ratingItem/RatingItem'
import "./allratings.scss"
import MediaQuery from "react-responsive";
import SideConditionSearch from '../../components/sideConditionSearch/SideConditionSearch';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

function AllRatings() {
    const { ratings } = useSelector((state: RootState) => state.ratings)
    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className="allRatingsContainer">
                    <div className="headerContainer">
                        <div className="title">
                            口コミ情報 一覧
                        </div>
                    </div>

                    {ratings.map((rating) => (
                        <RatingItem rating={rating} isMobile={false} />

                    ))}

                </div>

            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <div className="allRatingsContainerMobile">
                    <div className="headerContainer">
                        <div className="title">
                            口コミ情報 一覧
                        </div>
                    </div>

                    {ratings.map((rating) => (
                        <RatingItem rating={rating} isMobile={false} />

                    ))}

                </div>

            </MediaQuery>
        </>
    )
}

export default AllRatings