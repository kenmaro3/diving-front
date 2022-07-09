import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PrefectureList from '../../components/prefectureList/PrefectureList';
import { Rating } from 'react-simple-star-rating'
import StarRatingInput from 'react-star-rating-input'
import "./createspot.scss"

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
        navigate("/spots/10/images/new", { state: stateToSend })
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

    return (
        <div className='createSpotContainer'>
            <div className="headContainer">
                <div className="title">
                    スポットを登録
                </div>

                <div className="description">

                    ダイビングスポット登録をしましょう。 <br />
                    不明な箇所は未入力のままでも登録できます。<br />
                    登録されたスポットに対して、ユーザは口コミをすることができるようになります。<br />
                    一度登録されたスポットは、後にユーザーが編集し情報を追加できます。 <br />
                    運営の判断により重複したスポットは削除されることがありますのでご注意ください。
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
                            登録後は誰でも編集できるようになります。知っている項目を編集してみましょう。<br />
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

            {/* <div className="seaInfoContainer">
                <div className="headerTitle">
                    海情報
                </div>
                <div className="container">

                    <div className="containerInside">
                        <div className="description">
                            ダイビングスポットの初期評価を入力してください。ユーザよって評価は更新されていきます。
                        </div>
                        <div className="inputContainers">
                            <div className="inputContainer">
                                <div className="title">
                                    水質情報
                                </div>

                                <div className="ratingContainer">
                                    <Rating
                                        onClick={handleWaterRating}
                                        ratingValue={waterRating}
                                        size={20}
                                        transition
                                        fillColor='orange'
                                        emptyColor='gray'
                                        className='foo' // Will remove the inline style if applied
                                    />
                                    <span className='ratingValue'>
                                        {waterRating}
                                    </span>
                                </div>

                                <textarea name="" id="" rows={4} value={water} onChange={(e) => setWater(e.target.value)}></textarea>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    生き物情報
                                </div>
                                <div className="ratingContainer">
                                    <Rating
                                        onClick={handleAnimalRating}
                                        ratingValue={animalRating}
                                        size={20}
                                        transition
                                        fillColor='orange'
                                        emptyColor='gray'
                                        className='foo' // Will remove the inline style if applied
                                    />
                                    <span className='ratingValue'>
                                        {animalRating}
                                    </span>
                                </div>
                                <textarea name="" id="" rows={4} value={animal} onChange={(e) => setAnimal(e.target.value)}></textarea>
                            </div>
                            <div className="inputContainer">
                                <div className="title">
                                    アクティビティ情報
                                </div>
                                <div className="ratingContainer">
                                    <Rating
                                        onClick={handleActivityRating}
                                        ratingValue={ActivityRating}
                                        size={20}
                                        transition
                                        fillColor='orange'
                                        emptyColor='gray'
                                        className='foo' // Will remove the inline style if applied
                                    />
                                    <span className='ratingValue'>
                                        {ActivityRating}
                                    </span>
                                </div>
                                <textarea name="" id="" rows={4} value={Activity} onChange={(e) => setActivity(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

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


        </div>
    )
}

export default CreateSpot