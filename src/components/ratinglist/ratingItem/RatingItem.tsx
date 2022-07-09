import React, { FC, useEffect } from 'react';
import './ratingitem.scss'
import { Link, useNavigate } from "react-router-dom";
import { IRating } from "../../../types/rating-type";
import { formatDate } from "../../../helpers";
import TimeAgo from 'javascript-time-ago';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
TimeAgo.addLocale(en)

interface RatingItemProps {
    rating: IRating;
    // displayImage?: boolean;
    isMobile: boolean;
}

const RatingItem: FC<RatingItemProps> = ({ rating, isMobile }) => {

    const navigate = useNavigate()

    const jumpToRating = () => {
        navigate(`/ratings/${rating.id}`)
    }


    return (
        <div className={`${isMobile ? "ratingItemContainerMobile" : "ratingItemContainer"}`}>

            <div className="rating" onClick={() => jumpToRating()}>
                <div className="header">
                    <div className="left">
                        <div className="container">
                            <div className="image">
                                <PersonIcon />

                            </div>
                            <div className="nameContainer">
                                <div className="name">
                                    {rating.user.user_name}
                                </div>
                                <div className="date">
                                    <span className={'ratingDate'}>{formatDate(rating.date_and_time_published)}</span>
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

                <div className="content">
                    <span className="title">行った場所</span>
                    <span className="value">{rating.spot.name}</span>
                </div>

                <div className="footer">
                    <div className="infoContainer">
                        <span className='title'>水質評価</span>
                        <span className="ratingValue">{`${rating.water_rating ? rating.water_rating: "----"}`}</span>
                        <span className="ratingInfo">{`${rating.water_info ? rating.water_info : "----"}`}</span>
                    </div>

                    <div className="infoContainer">
                        <span className='title'>生きもの評価</span>
                        <span className="ratingValue">{`${rating.animal_rating ? rating.animal_rating : "----"}`}</span>
                        <span className="ratingInfo">{`${rating.animal_info ? rating.animal_info : "----"}`}</span>
                    </div>

                    <div className="infoContainer">
                        <span className='title'>アクティビティ評価</span>
                        <span className="ratingValue">{`${rating.activity_rating ? rating.activity_rating : "----"}`}</span>
                        <span className="ratingInfo">{`${rating.activity_info ? rating.activity_info : "----"}`}</span>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default RatingItem;