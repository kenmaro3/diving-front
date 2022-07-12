import React, { useEffect, useState } from 'react';
import './rating.scss'
import { Link, useParams, useNavigate } from "react-router-dom";
import { formatDate } from "../../helpers";

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RatingService from '../../services/rating-service';
import { IRating } from '../../types/rating-type';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import MediaQuery from "react-responsive";

const Rating = () => {
    const { rating_id } = useParams()
    const [ratingToShow, setRatingToShow] = useState<IRating>();

    const navigate = useNavigate()

    const jumpToAllRatings = () => {
        if (ratingToShow !== undefined) {
            navigate(`/ratings/spot/${ratingToShow.spot.id}`, { state: { spot_name: ratingToShow.spot.name } })
        }

    }

    const jumpToSpot = () => {
        if (ratingToShow !== undefined) {
            navigate(`/spots/${ratingToShow.spot.id}`)
        }

    }

    useEffect(() => {
        (async () => {
            const target_rating = await RatingService.getById(Number(rating_id))
            console.log("target_rating")
            console.log(target_rating)

            setRatingToShow(target_rating.data)

            console.log("rating here")
            console.log(ratingToShow)

        })()

    }, [rating_id])


    const commonJsx = () => {
        return (

            <div className="ratingCard">
                <div className="header">
                    <div className="title">
                        {ratingToShow?.spot?.name}

                    </div>
                    <div className="address">
                        {`${ratingToShow?.spot?.prefecture} ${ratingToShow?.spot?.address1} ${ratingToShow?.spot?.address2} ${ratingToShow?.spot?.address3}`}
                    </div>
                </div>
                <div className="segment">
                    <div className="placeInfo" onClick={() => jumpToSpot()}>
                        スポット情報
                    </div>
                    <div className="rating active">
                        投稿
                    </div>

                </div>

                <div className="contentContainer">
                    <div className="header">
                        <div className="left">
                            <div className="container">
                                <div className="image">
                                    <PersonIcon />

                                </div>
                                <div className="nameContainer">
                                    <div className="name">
                                        {ratingToShow?.user?.user_name}
                                    </div>
                                    <div className="date">
                                        {ratingToShow?.date_and_time_published ?
                                            formatDate(ratingToShow?.date_and_time_published)
                                            :
                                            "訪問日時不明"
                                        }
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="right">
                            <div className="option">
                                <MoreHorizIcon />
                            </div>

                        </div>

                    </div>

                    <div className="featureInfoContainer">
                        <div className="header">
                            口コミ情報
                        </div>
                        <div className="featureCard">
                            <div className="icon">

                            </div>
                            <div className="title">
                                水質情報
                            </div>
                            <div className="value">
                                {ratingToShow?.water_rating}

                            </div>
                            <div className="comment">
                                {ratingToShow?.water_info}
                            </div>

                        </div>
                        <div className="featureCard">
                            <div className="icon">

                            </div>
                            <div className="title">
                                生き物情報

                            </div>
                            <div className="value">
                                {ratingToShow?.animal_rating}

                            </div>
                            <div className="comment">
                                {ratingToShow?.animal_info}

                            </div>

                        </div>
                        <div className="featureCard">
                            <div className="icon">

                            </div>
                            <div className="title">
                                アクティビティ情報

                            </div>
                            <div className="value">
                                {ratingToShow?.activity_rating}

                            </div>
                            <div className="comment">
                                {ratingToShow?.activity_info}

                            </div>

                        </div>

                        <div className="headerSecond">
                            体験談
                        </div>
                        <div className="experienceContent">
                            {ratingToShow?.other_info}
                        </div>

                    </div>


                    <div className="commentContainer">

                        <div className="buttonContainer">
                            <button className="other_rating" onClick={jumpToAllRatings}>
                                この場所の他の口コミを見る
                            </button>


                        </div>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className="ratingContainer">
                    {commonJsx()}

                </div>


            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <div className="ratingContainerMobile">
                    {commonJsx()}

                </div>


            </MediaQuery>

        </>
    )


}

export default Rating;