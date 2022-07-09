import React, { FC, useEffect, useState } from 'react'
import "./spotitem.scss"
import { useNavigate } from 'react-router-dom';
import { ISpot } from '../../../types/spot-type';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface SpotItemProp {
  spot: ISpot;

}

const SpotItem: FC<SpotItemProp> = ({ spot }) => {
  const navigate = useNavigate()
  const jumpToSpot = () => {
    navigate(`/spots/${spot.id}`)
  }

  const [waterRating, setWaterRating] = useState<number>(0)
  const [animalRating, setAnimalRating] = useState<number>(0)
  const [activityRating, setActivityRating] = useState<number>(0)

  useEffect(() => {

    var tmpWaterRating = 0
    var tmpWaterCount = 0
    spot.user_ratings.forEach((rating) => {
      if (rating.water_rating !== 0) {
        tmpWaterCount += 1
        tmpWaterRating += rating.water_rating
      }
    })

    if (tmpWaterCount > 0) {
      setWaterRating(tmpWaterRating / tmpWaterCount)
    }
    else {
      setWaterRating(0)
    }



    var tmpAnimalRating = 0
    var tmpAnimalCount = 0
    spot.user_ratings.forEach((rating) => {
      if (rating.animal_rating !== 0) {
        tmpAnimalCount += 1
        tmpAnimalRating += rating.animal_rating
      }
    })

    if (tmpAnimalCount > 0) {
      setAnimalRating(tmpAnimalRating / tmpAnimalCount)
    }
    else {
      setAnimalRating(0)
    }



    var tmpActivityRating = 0
    var tmpActivityCount = 0
    spot.user_ratings.forEach((rating) => {
      if (rating.activity_rating !== 0) {
        tmpActivityCount += 1
        tmpActivityRating += rating.activity_rating
      }
    })

    if (tmpActivityCount > 0) {
      setActivityRating(tmpActivityRating / tmpActivityCount)
    }
    else {
      setActivityRating(0)

    }


  }, [spot])



  return (
    <div className="spotItemContainer" onClick={(() => jumpToSpot())}>
      <img src="https://www.owd.jp/wp-content/uploads/2018/04/DSC7678.jpg" alt="" />

      <div className="info">
        <div className="name">
          {spot.name}

        </div>
        <div className="address">
          {`${spot.prefecture} ${spot.address1} ${spot.address2} ${spot.address3}`}

        </div>
        <div className="feature">
          <a href={spot.hp}></a>

        </div>

        <div className="stats">
          <div className="content">
            <FavoriteBorderIcon />
            <span className='number'>{spot.user_likes?.length}件</span>

          </div>
          <div className="content">
            <ChatBubbleOutlineIcon />
            <span className='number'>{spot.user_ratings?.length}件</span>
          </div>
        </div>

        <div className="ratings">
          <div className="content">
            <span className='title'>水質評価</span>
            <span className='number'>{waterRating.toFixed(1)}</span>
          </div>
          <div className="content">
            <span className='title'>動物評価</span>
            <span className='number'>{animalRating.toFixed(1)}</span>
          </div>
          <div className="content">
            <span className='title'>アクティビティ評価</span>
            <span className='number'>{activityRating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="right">
      </div>

    </div>
  )
}

export default SpotItem