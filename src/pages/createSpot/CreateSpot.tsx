import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PrefectureList from '../../components/prefectureList/PrefectureList';
import { Rating } from 'react-simple-star-rating'
import StarRatingInput from 'react-star-rating-input'
import "./createspot.scss"
import MediaQuery from "react-responsive";

const CreateSpot = () => {
    const navigate = useNavigate()
    const jumpToAddImages = () => {
        console.log(`name: ${name}`)
        console.log(`prefecture: ${prefecture}`)
        const stateToSend = {
            name, zip, prefecture, address1, address2, address3, access, parking,
            phone, hp, close, open, minPrice, rentalPrice,
            lat, lng, other
        }
        navigate("/spots/images/new", { state: stateToSend })
    }

    const [name, setName] = useState<string>("")
    const [zip, setZip] = useState<string>("")
    const [prefecture, setPrefecture] = useState<string>("")
    const [address1, setAddress1] = useState<string>("")
    const [address2, setAddress2] = useState<string>("")
    const [address3, setAddress3] = useState<string>("")
    const [lat, setLat] = useState<string>("")
    const [lng, setLng] = useState<string>("")
    const [access, setAccess] = useState<string>("")
    const [parking, setParking] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [hp, setHp] = useState<string>("")
    const [close, setClose] = useState<string>("")
    const [open, setOpen] = useState<string>("")
    const [minPrice, setMinPrice] = useState<string>("")
    const [rentalPrice, setRentalPrice] = useState<string>("")

    // const [water, setWater] = useState<string>("")
    // const [animal, setAnimal] = useState<string>("")
    // const [Activity, setActivity] = useState<string>("")

    // const [waterRating, setWaterRating] = useState<number>(0)
    // const [animalRating, setAnimalRating] = useState<number>(0)
    // const [ActivityRating, setActivityRating] = useState<number>(0)

    const [other, setOther] = useState<string>("")

    // const handleWaterRating = (rate: number) => {
    //     const tmp = rate / 20
    //     console.log(`waterRating: ${tmp}`)
    //     setWaterRating(tmp)
    // }

    // const handleAnimalRating = (rate: number) => {
    //     const tmp = rate / 20
    //     console.log(`animalRating: ${tmp}`)
    //     setAnimalRating(tmp)
    // }

    // const handleActivityRating = (rate: number) => {
    //     const tmp = rate / 20
    //     console.log(`ActivityRating: ${tmp}`)
    //     setActivityRating(tmp)
    // }

    const commonJsx = (isMobile: boolean) => {
        return (
            <>
                <div className="headContainer">
                    <div className="title">
                        ?????????????????????
                    </div>

                    <div className="description">

                        ?????????????????????????????????????????????????????? <br />
                        ???????????????????????????????????????????????????????????????<br />
                        ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
                        ??????????????????????????????????????????????????????????????????????????????????????????????????? <br />
                        ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
                                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????<br />
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

export default CreateSpot