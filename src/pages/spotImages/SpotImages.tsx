import { ConnectingAirportsOutlined } from '@mui/icons-material';
import React, { FC, useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddSpot } from '../../store/reducers/spot/action-creators';
import { useNavigate, useLocation } from "react-router-dom";
import "./spotimages.scss";
import SpotService from "../../services/spot-service";


// interface SpotImagesProp {
//   name?: string;
//   zip?: string;
//   prefecture?: string;
//   address1?: string;
//   address2?: string;
//   address3?: string;
//   access?: string;
//   parking?: string;
//   phone?: string;
//   hp?: string;
//   close?: string;
//   open?: string;
//   min_price?: string;
//   rental_price?: string;
//   water?: string;
//   animal?: string;
//   Activity?: string;
//   other?: string;
// }


const SpotImages: FC = () => {
  const [file1, setFile1] = useState<any>(null)
  const [file2, setFile2] = useState<any>(null)
  const [file3, setFile3] = useState<any>(null)
  const [file4, setFile4] = useState<any>(null)
  const [file5, setFile5] = useState<any>(null)
  const [file6, setFile6] = useState<any>(null)
  const [imageUrl1, setImageUrl1] = useState<string>("")
  const [imageUrl2, setImageUrl2] = useState<string>("")
  const [imageUrl3, setImageUrl3] = useState<string>("")
  const [imageUrl4, setImageUrl4] = useState<string>("")
  const [imageUrl5, setImageUrl5] = useState<string>("")
  const [imageUrl6, setImageUrl6] = useState<string>("")

  const [isError, setIsError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const hiddenFileInput1 = useRef<HTMLInputElement>(null)
  const hiddenFileInput2 = useRef<HTMLInputElement>(null)
  const hiddenFileInput3 = useRef<HTMLInputElement>(null)
  const hiddenFileInput4 = useRef<HTMLInputElement>(null)
  const hiddenFileInput5 = useRef<HTMLInputElement>(null)
  const hiddenFileInput6 = useRef<HTMLInputElement>(null)


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  // const [name, setName] 
  // = useState<{ name: string}>(location.state as { name: string})

  const [imageUrl, setImageUrl] = useState<string>("")

  const [state, setState] = useState(location.state)

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

  useEffect(() => {
    setName((state as { name: string }).name)
    setZip((state as { zip: string }).zip)
    setPrefecture((state as { prefecture: string }).prefecture)
    setAddress1((state as { address1: string }).address1)
    setAddress2((state as { address2: string }).address2)
    setAddress3((state as { address3: string }).address3)
    setLat((state as {lat: string}).lat)
    setLng((state as {lng: string}).lng)
    setAccess((state as { access: string }).access)
    setParking((state as { parking: string }).parking)
    setPhone((state as { phone: string }).phone)
    setHp((state as { hp: string }).hp)
    setClose((state as { close: string }).close)
    setOpen((state as { open: string }).open)
    setMinPrice((state as { minPrice: string }).minPrice)
    setRentalPrice((state as { rentalPrice: string }).rentalPrice)
    // setWater((state as { water: string }).water)
    // setAnimal((state as { animal: string }).animal)
    // setActivity((state as { Activity: string }).Activity)
    // setWaterRating((state as { waterRating: number }).waterRating)
    // setAnimalRating((state as { animalRating: number }).animalRating)
    // setActivityRating((state as { ActivityRating: number }).ActivityRating)

    setOther((state as { other: string }).other)
  }, [location])


  const handleClick = (index: number) => {
    if(index==1){
      hiddenFileInput1.current?.click()
    }
    else if (index==2){
      hiddenFileInput2.current?.click()
    }
    else if (index==3){
      hiddenFileInput3.current?.click()
    }
    else if (index==4){
      hiddenFileInput4.current?.click()
    }
    else if (index==5){
      hiddenFileInput5.current?.click()
    }
    else if (index==6){
      hiddenFileInput6.current?.click()
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const fileUploaded = event.target.files?.[0]
    if (fileUploaded) {
      if(index == 0){
        setImageUrl1(URL.createObjectURL(fileUploaded))
        setFile1(fileUploaded)
      }
      else if(index == 1){
        setImageUrl2(URL.createObjectURL(fileUploaded))
        setFile2(fileUploaded)
      }
      else if(index == 2){
        setImageUrl3(URL.createObjectURL(fileUploaded))
        setFile3(fileUploaded)
      }
      else if(index == 3){
        setImageUrl4(URL.createObjectURL(fileUploaded))
        setFile4(fileUploaded)
      }
      else if(index == 4){
        setImageUrl5(URL.createObjectURL(fileUploaded))
        setFile5(fileUploaded)
      }
      else if(index == 5){
        setImageUrl6(URL.createObjectURL(fileUploaded))
        setFile6(fileUploaded)
      }
    }
  }

  const submitSpot = async () => {

    try {
      //const response = await PostService.createPost(file, data['Title'], stringFromHtml, user.id, data['Description'])
      const response = await SpotService.createSpot(
        file1,
        file2,
        file3,
        file4,
        file5,
        file6,
        name,
        zip,
        prefecture,
        address1,
        address2,
        address3,
        lat,
        lng,
        access,
        parking,
        phone,
        hp,
        close, open, minPrice, rentalPrice, other,
      )
      // const response = await SpotService.createSpot(file, location.state.name, location.state.zip, location.state.prefecture, location.state.address1,
      //   location.state.address2, location.state.address3, location.state.access, location.state.parking, location.state.phone, location.state.hp,
      //   location.state.close, location.state.open, location.state.min_price, location.state.rental_price, location.state.water, location.state.animal, location.state.Activity, location.state.other
      //   )
      // dispatch(setAddSpot(response.data))
      navigate(`/spots/${response.data.id}`)
    } catch (e: any) {
      const response = e.response.data.message
      if (Array.isArray(response)) setIsError(response[0])
      else setIsError(response)
      console.log(e.response)
    } finally {
      setIsLoading(false)
    }


  }

  return (
    <div className='spotImagesContainer'>
      <div className="headContainer">
        <div className="title">
          スポットの画像を登録
        </div>

        <div className="description">
          アップロードする写真はご自身で撮影した写真か、使用許可をいただいた写真のみでお願いします。 <br />
          不適切な画像をアップロードした場合、運営判断で削除する場合がございます。
        </div>
      </div>

      <div className="flowContainer">
        <div className="first">
          01施設情報入力
        </div>
        <div className="second active">
          02施設画像登録
        </div>
        <div className="third">
          03登録完了
        </div>
      </div>

      <div className="basicInfoContainer">
        <div className="headerTitle">
          画像登録
        </div>
        <div className="container">
          <div className="containerInside">
            <div className="description">
              画像は追加と差し替えのみ行うことができます。 <br />
              特定画像の削除ご希望の方はお手数ですが、お問い合わせフォームよりご連絡ください。
            </div>
            <div className="inputContainers">
              <div className="inputContainer">
                <div className="title">画像１</div>
                {imageUrl1 ? <img width={300} height={300} src={imageUrl1} alt="postPicture1" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(1)}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput1}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 0)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">画像２</div>
                {imageUrl2 ? <img width={300} height={300} src={imageUrl2} alt="postPicture2" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(2)}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput2}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 1)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">画像３</div>
                {imageUrl3 ? <img width={300} height={300} src={imageUrl3} alt="postPicture3" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(3)}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput3}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 2)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">画像４</div>
                {imageUrl4 ? <img width={300} height={300} src={imageUrl4} alt="postPicture4" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(4)}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput4}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 3)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">画像５</div>
                {imageUrl5 ? <img width={300} height={300} src={imageUrl5} alt="postPicture5" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(5)}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput5}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 4)}
                />
              </div>
              <div className="inputContainer">
                <div className="title">画像６</div>
                {imageUrl6 ? <img width={300} height={300} src={imageUrl6} alt="postPicture6" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(6)}>画像を登録する</button>
                <input
                  type="file"
                  ref={hiddenFileInput6}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 5)}
                />
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="backButtonContainer">
        <button onClick={(() => submitSpot())}>戻る</button>
      </div>

      <div className="buttonContainer">
        <button onClick={(() => submitSpot())}>登録を完了する</button>
      </div>


    </div>
  )
}

export default SpotImages