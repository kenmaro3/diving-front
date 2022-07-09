import React, { FC, useEffect, useState } from 'react'
import { ISpot } from '../../types/spot-type'
import { IRating } from '../../types/rating-type'
import "./featureinfo.scss"

interface FeatureInfoProp {
    spot: ISpot;
}

const FeatureInfo: FC<FeatureInfoProp> = ({ spot }) => {

    const [waterRating, setWaterRating] = useState<number>(0)
    const [animalRating, setAnimalRating] = useState<number>(0)
    const [activityRating, setActivityRating] = useState<number>(0)

    const [waterRatingCount, setWaterRatingCount] = useState<number>(0)
    const [animalRatingCount, setAnimalRatingCount] = useState<number>(0)
    const [activityRatingCount, setActivityRatingCount] = useState<number>(0)

    const [waterInfoCount, setWaterInfoCount] = useState<number>(0)
    const [animalInfoCount, setAnimalInfoCount] = useState<number>(0)
    const [activityInfoCount, setActivityInfoCount] = useState<number>(0)

    useEffect(() => {

        var tmpWaterRating = 0
        var tmpWaterCount = 0
        var tmpWaterInfoCount = 0
        spot.user_ratings.forEach((rating) => {
            if (rating.water_rating !== 0) {
                tmpWaterCount += 1
                tmpWaterRating += rating.water_rating
            }
            if (rating.water_info) {
                tmpWaterInfoCount += 1
            }
        })

        if(tmpWaterCount > 0){
            setWaterRating(tmpWaterRating / tmpWaterCount)
        }
        else{
            setWaterRating(0);
        }

        setWaterRatingCount(tmpWaterCount)
        setWaterInfoCount(tmpWaterInfoCount)



        var tmpAnimalRating = 0
        var tmpAnimalCount = 0
        var tmpAnimalInfoCount = 0
        spot.user_ratings.forEach((rating) => {
            if (rating.animal_rating !== 0) {
                tmpAnimalCount += 1
                tmpAnimalRating += rating.animal_rating
            }
            if (rating.animal_info) {
                tmpAnimalInfoCount += 1
            }
        })

        if(tmpAnimalCount > 0){
            setAnimalRating(tmpAnimalRating / tmpAnimalCount)
        }
        else{
            setAnimalRating(0)
        }

        setAnimalRatingCount(tmpAnimalCount)
        setAnimalInfoCount(tmpAnimalInfoCount)


        var tmpActivityRating = 0
        var tmpActivityCount = 0
        var tmpActivityInfoCount = 0
        spot.user_ratings.forEach((rating) => {
            if (rating.activity_rating !== 0) {
                tmpActivityCount += 1
                tmpActivityRating += rating.activity_rating
            }
            if (rating.activity_info) {
                tmpActivityInfoCount += 1
            }
        })

        if(tmpActivityCount > 0){
            setActivityRating(tmpActivityRating / tmpActivityCount)
        }
        else{
            setActivityRating(0)
        }

        setActivityRatingCount(tmpActivityCount)
        setActivityInfoCount(tmpActivityInfoCount)

    }, [])


    return (
        <div className="featureInfoContainer">
            <div className="header">
                みんなの口コミ情報
            </div>
            <div className="featureCard">
                <div className="icon">

                </div>
                <div className="title">
                    水質情報
                </div>

                <div className="rating">
                    <div className="value">
                        {waterRating}

                    </div>

                </div>
                <div className="comment">
                    <span className='value'>{waterRatingCount}</span>
                    <span className="description"> 件の評価</span>
                </div>
                <div className="comment">
                    <span className='value'>{waterInfoCount}</span>
                    <span className="description"> 件の情報</span>
                </div>

            </div>
            <div className="featureCard">
                <div className="icon">

                </div>
                <div className="title">
                    生き物情報

                </div>

                <div className="rating">
                    <div className="value">
                        {animalRating}
                    </div>
                </div>

                <div className="comment">
                    <span className='value'>{animalRatingCount}</span>
                    <span className="description"> 件の評価</span>

                </div>

                <div className="comment">
                    <span className='value'>{animalInfoCount}</span>
                    <span className="description"> 件の情報</span>

                </div>

            </div>
            <div className="featureCard">
                <div className="icon">

                </div>
                <div className="title">
                    アクティビティ情報

                </div>

                <div className="rating">
                    <div className="value">
                        {activityRating}
                    </div>

                </div>
                <div className="comment">
                    <span className='value'>{activityRatingCount}</span>
                    <span className="description"> 件の評価</span>
                </div>

                <div className="comment">
                    <span className='value'>{activityInfoCount}</span>
                    <span className="description"> 件の情報</span>
                </div>

            </div>

        </div>
    )
}

export default FeatureInfo