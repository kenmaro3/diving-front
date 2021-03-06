import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import PrefectureList from '../../components/prefectureList/PrefectureList';
import { Rating } from 'react-simple-star-rating'
import StarRatingInput from 'react-star-rating-input'
import "./editspot.scss"
import SpotService from '../../services/spot-service';
import { ISpot } from "../../types/spot-type";
import MediaQuery from "react-responsive";


const EditSpot = () => {
    const { spot_id } = useParams()
    const navigate = useNavigate()
    const jumpToAddImages = () => {
        console.log(`name: ${name}`)
        console.log(`prefecture: ${prefecture}`)
        const stateToSend = {
            name, zip, prefecture, address1, address2, address3, lat, lng, access, parking,
            phone, hp, close, open, minPrice, rentalPrice, other,
            image1, image2, image3, image4, image5, image6
        }
        navigate(`/spots/${spot_id}/images/edit`, { state: stateToSend })
    }

    useEffect(() => {

        (async () => {
            if (spot_id !== undefined) {
                const response = await SpotService.getById(Number(spot_id))
                setSpotToEdit(response.data)
            }

        })()

    }, [spot_id])

    const setSpotToEdit = (spot: ISpot) => {
        setName(spot.name)
        setZip(spot.zip)
        setPrefecture(spot.prefecture)
        setAddress1(spot.address1)
        setAddress2(spot.address2)
        setAddress3(spot.address3)

        setLat(spot.lat)
        setLng(spot.lng)

        setAccess(spot.access)
        setParking(spot.parking)
        setPhone(spot.phone)
        setHp(spot.hp)
        setClose(spot.close)
        setOpen(spot.open)
        setMinPrice(spot.min_price)
        setRentalPrice(spot.rental_price)

        setImage1(spot.image1)
        setImage2(spot.image2)
        setImage3(spot.image3)
        setImage4(spot.image4)
        setImage5(spot.image5)
        setImage6(spot.image6)

    }

    const [name, setName] = useState<string>("")
    const [zip, setZip] = useState<string>("")
    const [prefecture, setPrefecture] = useState<string>("")
    const [address1, setAddress1] = useState<string>("")
    const [address2, setAddress2] = useState<string>("")
    const [address3, setAddress3] = useState<string>("")
    const [lat, setLat] = useState<string>()
    const [lng, setLng] = useState<string>()
    const [access, setAccess] = useState<string>("")
    const [parking, setParking] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [hp, setHp] = useState<string>("")
    const [close, setClose] = useState<string>("")
    const [open, setOpen] = useState<string>("")
    const [minPrice, setMinPrice] = useState<string>("")
    const [rentalPrice, setRentalPrice] = useState<string>("")
    const [image1, setImage1] = useState<string>("")
    const [image2, setImage2] = useState<string>("")
    const [image3, setImage3] = useState<string>("")
    const [image4, setImage4] = useState<string>("")
    const [image5, setImage5] = useState<string>("")
    const [image6, setImage6] = useState<string>("")


    const [other, setOther] = useState<string>("")

    const commonJsx = (isMobile: boolean) => {
        return (
            <>
                <div className="headContainer">
                    <div className="title">
                        ???????????????????????????
                    </div>

                    <div className="description">

                        ????????????????????????????????????????????????????????? <br />
                        ???????????????????????????????????????????????????????????????????????????????????????????????????????????? <br />
                    </div>
                </div>

                <div className="flowContainer">
                    <div className="first">
                        01??????????????????
                    </div>
                    <div className="second">
                        02??????????????????
                    </div>
                    <div className="third">
                        03????????????
                    </div>
                </div>

                <div className="basicInfoContainer">
                    <div className="headerTitle">
                        ??????????????????
                    </div>
                    <div className="container">
                        <div className="containerInside">
                            <div className="description">
                                ??????????????????????????????????????????????????????<br />
                            </div>
                            <div className="inputContainers">
                                <div className="inputContainer">
                                    <div className="title">
                                        ???????????????

                                    </div>
                                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='???: xxx???????????????????????????' />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ????????????

                                    </div>
                                    <PrefectureList setPrefecture={setPrefecture} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ????????????

                                    </div>
                                    <input type="text" placeholder='???: 123-4567' value={zip} onChange={(e) => setZip(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ?????????

                                    </div>
                                    <input type="text" placeholder='?????? ???: ?????????' value={address1} onChange={(e) => setAddress1(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ?????????

                                    </div>
                                    <input type="text" placeholder='?????? ???: ????????????1-23-4' value={address2} onChange={(e) => setAddress2(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ?????????

                                    </div>
                                    <input type="text" placeholder='???: ?????????????????????' value={address3} onChange={(e) => setAddress3(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ??????
                                    </div>
                                    <input type="text" placeholder='???: 35.4548' value={lat} onChange={(e) => setLat(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ??????
                                    </div>
                                    <input type="text" placeholder='???: 139.4534' value={lng} onChange={(e) => setLng(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ????????????

                                    </div>
                                    <textarea name="" id="" rows={10} value={access} onChange={(e) => setAccess(e.target.value)}></textarea>
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ???????????????

                                    </div>
                                    <input type="text" placeholder='???: ?????? ???????????????' value={parking} onChange={(e) => setParking(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ????????????

                                    </div>
                                    <input type="text" placeholder='???: 123-4567-8901' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ??????????????????

                                    </div>
                                    <input type="text" placeholder='???: https://google.com' value={hp} onChange={(e) => setHp(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ?????????

                                    </div>
                                    <input type="text" placeholder='???: ?????????????????????' value={close} onChange={(e) => setClose(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ????????????

                                    </div>
                                    <input type="text" placeholder='???: 10:00 ~ 17:00' value={open} onChange={(e) => setOpen(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ????????????

                                    </div>
                                    <input type="text" placeholder='???: ????????????4000???' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ??????????????????

                                    </div>
                                    <input type="text" placeholder='???: ????????????????????????????????????????????????' value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="otherInfoContainer">
                    <div className="headerTitle">
                        ????????????
                    </div>
                    <div className="container">

                        <div className="containerInside">
                            <div className="description">
                                ????????????????????????????????????????????????????????????????????????????????????
                            </div>
                            <div className="inputContainers">
                                <div className="inputContainer">
                                    <div className="title">
                                        ??????????????????
                                    </div>
                                    <textarea name="" id="" rows={4} value={other} onChange={(e) => setOther(e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttonContainer">
                    <button onClick={(() => jumpToAddImages())}>????????????????????????</button>
                </div>
            </>

        )
    }


    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className='createSpotContainer'>
                    {commonJsx(false)}

                </div>

            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <div className='createSpotContainerMobile'>
                    {commonJsx(true)}
                </div>

            </MediaQuery>
        </>

    )
}

export default EditSpot