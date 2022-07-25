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
                        スポット情報を編集
                    </div>

                    <div className="description">

                        ダイビングスポットの編集をしましょう。 <br />
                        まだ記載されていない情報や、修正が必要な情報について編集をお願いします。 <br />
                    </div>
                </div>

                <div className="flowContainer">
                    <div className="first">
                        01施設情報入力
                    </div>
                    <div className="second">
                        02施設画像登録
                    </div>
                    <div className="third">
                        03登録完了
                    </div>
                </div>

                <div className="basicInfoContainer">
                    <div className="headerTitle">
                        施設基本情報
                    </div>
                    <div className="container">
                        <div className="containerInside">
                            <div className="description">
                                知っている項目を編集してみましょう。<br />
                            </div>
                            <div className="inputContainers">
                                <div className="inputContainer">
                                    <div className="title">
                                        スポット名

                                    </div>
                                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='例: xxxダイビングスポット' />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        都道府県

                                    </div>
                                    <PrefectureList setPrefecture={setPrefecture} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        郵便番号

                                    </div>
                                    <input type="text" placeholder='例: 123-4567' value={zip} onChange={(e) => setZip(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        住所１

                                    </div>
                                    <input type="text" placeholder='市区 例: 渋谷区' value={address1} onChange={(e) => setAddress1(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        住所２

                                    </div>
                                    <input type="text" placeholder='町村 例: 千駄ヶ谷1-23-4' value={address2} onChange={(e) => setAddress2(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        住所３

                                    </div>
                                    <input type="text" placeholder='例: ダイビング海岸' value={address3} onChange={(e) => setAddress3(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        緯度
                                    </div>
                                    <input type="text" placeholder='例: 35.4548' value={lat} onChange={(e) => setLat(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        経度
                                    </div>
                                    <input type="text" placeholder='例: 139.4534' value={lng} onChange={(e) => setLng(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        アクセス

                                    </div>
                                    <textarea name="" id="" rows={10} value={access} onChange={(e) => setAccess(e.target.value)}></textarea>
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        駐車場情報

                                    </div>
                                    <input type="text" placeholder='例: 有り 有料３０台' value={parking} onChange={(e) => setParking(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        電話番号

                                    </div>
                                    <input type="text" placeholder='例: 123-4567-8901' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        ホームページ

                                    </div>
                                    <input type="text" placeholder='例: https://google.com' value={hp} onChange={(e) => setHp(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        定休日

                                    </div>
                                    <input type="text" placeholder='例: 毎月第２水曜日' value={close} onChange={(e) => setClose(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        営業時間

                                    </div>
                                    <input type="text" placeholder='例: 10:00 ~ 17:00' value={open} onChange={(e) => setOpen(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        最低料金

                                    </div>
                                    <input type="text" placeholder='例: ガイド料4000円' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                                </div>
                                <div className="inputContainer">
                                    <div className="title">
                                        レンタル情報

                                    </div>
                                    <input type="text" placeholder='例: 全てレンタル可能（５０００円〜）' value={rentalPrice} onChange={(e) => setRentalPrice(e.target.value)} />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="otherInfoContainer">
                    <div className="headerTitle">
                        補足情報
                    </div>
                    <div className="container">

                        <div className="containerInside">
                            <div className="description">
                                おすすめポイントなど補足があればご自由にお書きください。
                            </div>
                            <div className="inputContainers">
                                <div className="inputContainer">
                                    <div className="title">
                                        おすすめ情報
                                    </div>
                                    <textarea name="" id="" rows={4} value={other} onChange={(e) => setOther(e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="buttonContainer">
                    <button onClick={(() => jumpToAddImages())}>画像の登録に進む</button>
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