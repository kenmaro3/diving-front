import React, { useEffect, useState } from 'react';
import './ratingspotall.scss'
import { Link, useParams, useNavigate, useLocation} from "react-router-dom";
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
import RatingItem from '../../components/ratinglist/ratingItem/RatingItem';

const RatingSpotAll = () => {
    const { spot_id } = useParams()
    const [ratingToShow, setRatingToShow] = useState<IRating[]>([]);
    const [spotName, setSpotName] = useState<string>("")

    const location = useLocation()

    const [state, setState] = useState(location.state)

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const target_rating = await RatingService.getBySpotId(Number(spot_id))
            console.log("target_rating")
            console.log(target_rating)

            setRatingToShow(target_rating.data)

            console.log("rating here")
            console.log(ratingToShow)

        })()

    }, [spot_id])

    useEffect(() => {
        setSpotName((state as { spot_name: string }).spot_name)

    }, [])

    const ratingParser = (rating: number) => {
        if(rating === 0){
            return "---"
        }
        else{
            return rating
        }
    }

    return (
        <div className="ratingSpotAllContainer">
            <div className="headerContainer">
                <div className="title">
                    口コミ情報 一覧
                </div>
                <div className="description">
                    <span className="spot">{spotName} </span>
                    <span className='info'>の口コミを確認してみましょう</span>

                </div>
            </div>

            {ratingToShow.map((rating) => (
                <RatingItem rating={rating} isMobile={false} />

            ))}

        </div>
    )


}

export default RatingSpotAll;