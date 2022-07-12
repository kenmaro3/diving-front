import React, { FC } from 'react'
import { ISpot } from '../../types/spot-type';
import Map from "../../components/map/Map"
import "./spotbasicinfo.scss"

interface SpotBasicInfoProp {
    spot: ISpot;
    isMobile: boolean;
}

const SpotBasicInfo: FC<SpotBasicInfoProp> = ({ spot, isMobile}) => {
    return (
        <div className={`${isMobile ? "spotBasicInfoContainerMobile" : "spotBasicInfoContainer"}`}>
            <div className="header">
                基本情報
            </div>
            <div className="container">
                <div className="left">
                    <div className="image">
                        <img width="400px" src={spot.image1} alt="" />


                    </div>
                    <div className="map">
                        <Map spot={spot}/>

                    </div>

                </div>
                <div className="right">
                    <div className="infoCard">
                        <div className="title">
                            スポット名

                        </div>
                        <div className="text">
                            {spot.name}

                        </div>

                    </div>
                    <div className="infoCard">
                        <div className="title">
                            住所
                        </div>
                        <div className="text">
                            {`${spot.prefecture} ${spot.address1} ${spot.address2} ${spot.address3}`}
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="title">
                            アクセス
                        </div>
                        <div className="text">
                            {spot.access}
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="title">
                            駐車場
                        </div>
                        <div className="text">
                            {spot.parking}
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="title">
                            TEL
                        </div>
                        <div className="text">
                            {spot.phone}
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="title">
                            HP
                        </div>
                        <div className="text">
                            <a href={spot.hp}>{spot.hp}</a>

                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="title">
                            営業時間
                        </div>
                        <div className="text">
                            {spot.open}
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="title">
                            料金
                        </div>
                        <div className="text">
                            {`最低料金: ${spot.min_price}`}
                            {`レンタル料金: ${spot.rental_price}`}
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default SpotBasicInfo