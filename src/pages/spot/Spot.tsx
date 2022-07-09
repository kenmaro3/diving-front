import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import "./spot.scss"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import Map from "../../components/map/Map"
import SpotService from '../../services/spot-service';
import { ISpot } from '../../types/spot-type';
import SpotBasicInfo from '../../components/spotBasicInfo/SpotBasicInfo';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';

const Spot = () => {
    const { spot_id } = useParams()
    const [spotToShow, setSpotToShow] = useState<ISpot>();

    const navigate = useNavigate()

    const jumpToCreatePost = () => {
        navigate(`/posts/new/${spot_id}`, { state: { spot_name: spotToShow?.name } })
    }

    const jumpToEditSpot = () => {
        navigate(`/spots/edit/${spot_id}`)

    }

    useEffect(() => {
        (async () => {
            const target_spot = await SpotService.getById(Number(spot_id))
            if (target_spot !== undefined) {
                setSpotToShow(target_spot.data)
            }



        })()

    }, [])


    return (
        <div className="spotContainer">
            <div className="innerMargin">
                <div className="header">
                    <div className="top">
                        <div className="left">

                        </div>
                        <div className="right">
                            {/* <div className="register">
                                <span className="title">登録者</span>
                                <span className="username">kenmaro</span>
                            </div>
                            <div className="history">
                                <span className="title">更新履歴</span>
                                <span className="icon"></span>

                            </div> */}
                            <div className="edit">
                                <span className="title" onClick={() => jumpToEditSpot()}>情報修正</span>

                            </div>
                            <div className="post">

                            </div>


                        </div>
                    </div>
                    <div className="title">
                        {spotToShow?.name}

                    </div>
                    <div className="address">
                        {`${spotToShow?.prefecture} ${spotToShow?.address1} ${spotToShow?.address2} ${spotToShow?.address3}`}
                    </div>
                    <div className="share">
                        <div className="left">
                            <div className="twitter">
                                <TwitterIcon />
                                <span className="title">
                                    ツイートする
                                </span>
                            </div>
                            <div className="facebook">
                                <FacebookIcon />
                                <span className="title">
                                    シェアする
                                </span>
                            </div>

                        </div>
                        <div className="right">
                            {/* <div className="like">
                                <span className='icon'></span>
                                <span className="title">
                                    いいね
                                </span>
                            </div> */}


                            <div className="post" onClick={(() => jumpToCreatePost())}>
                                <span className='icon'></span>
                                <span className='title'>
                                    口コミ投稿
                                </span>
                            </div>



                        </div>
                    </div>



                </div>

                <div className="segment">
                    <Link to={`/spots/${spotToShow?.id}`} style={{ textDecoration: 'none' }}>
                        <div className="placeInfo active">
                            スポット情報
                        </div>
                    </Link>

                    <Link to={`/ratings/spot/${spotToShow?.id}`} state={{ spot_name: spotToShow?.name }} style={{ textDecoration: 'none' }}>
                        <div className="post">
                            口コミ一覧
                        </div>
                    </Link>

                </div>


                {spotToShow &&
                    <FeatureInfo spot={spotToShow} />
                }
                <div className="postContainer">

                </div>
                {spotToShow &&
                    <SpotBasicInfo spot={spotToShow} />
                }
                <div className="photoContainer">
                    <div className="header">
                        写真ギャラリー
                    </div>
                    <div className="content">
                        {/* {spotToShow?.image2 ?
                            <img src={spotToShow?.image2} alt="" />
                            :
                            <img src="" alt="" />
                        }
                        {spotToShow?.image3 ?
                            <img src={spotToShow?.image3} alt="" />
                            :
                            <img src="" alt="" />
                        } */}
                        <img width={"300"} src={spotToShow?.image2} alt="" />
                        <img width={"300"} src={spotToShow?.image3} alt="" />
                        <img width={"300"} src={spotToShow?.image4} alt="" />
                        <img width={"300"} src={spotToShow?.image5} alt="" />
                        <img width={"300"} src={spotToShow?.image6} alt="" />
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Spot