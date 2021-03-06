import { ConnectingAirportsOutlined } from '@mui/icons-material';
import React, { FC, useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddSpot } from '../../store/reducers/spot/action-creators';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./editspotimages.scss";
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


const EditSpotImages: FC = () => {
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


  const { spot_id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  // const [name, setName] 
  // = useState<{ name: string}>(location.state as { name: string})

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

  const [isImage1Updated, setIsImage1Updated] = useState<boolean>(false)
  const [isImage2Updated, setIsImage2Updated] = useState<boolean>(false)
  const [isImage3Updated, setIsImage3Updated] = useState<boolean>(false)
  const [isImage4Updated, setIsImage4Updated] = useState<boolean>(false)
  const [isImage5Updated, setIsImage5Updated] = useState<boolean>(false)
  const [isImage6Updated, setIsImage6Updated] = useState<boolean>(false)

  // const [water, setWater] = useState<string>("")
  // const [animal, setAnimal] = useState<string>("")
  // const [activity, setActivity] = useState<string>("")

  // const [waterRating, setWaterRating] = useState<number>(0)
  // const [animalRating, setAnimalRating] = useState<number>(0)
  // const [activityRating, setActivityRating] = useState<number>(0)

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
    setImageUrl1((state as {image1: string}).image1)
    setImageUrl2((state as {image2: string}).image2)
    setImageUrl3((state as {image3: string}).image3)
    setImageUrl4((state as {image4: string}).image4)
    setImageUrl5((state as {image5: string}).image5)
    setImageUrl6((state as {image6: string}).image6)
    setOther((state as { other: string }).other)

    // setFile1(hiddenFileInput1.current?.files?.[0])
    // setFile2(hiddenFileInput2.current?.files?.[0])
    // setFile3(hiddenFileInput3.current?.files?.[0])
    // setFile4(hiddenFileInput4.current?.files?.[0])
    // setFile5(hiddenFileInput5.current?.files?.[0])
    // setFile6(hiddenFileInput6.current?.files?.[0])
    // console.log("here2")
    // imgRef1.current?.sr
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
        setIsImage1Updated(true)
      }
      else if(index == 1){
        setImageUrl2(URL.createObjectURL(fileUploaded))
        setFile2(fileUploaded)
        setIsImage2Updated(true)
      }
      else if(index == 2){
        setImageUrl3(URL.createObjectURL(fileUploaded))
        setFile3(fileUploaded)
        setIsImage3Updated(true)
      }
      else if(index == 3){
        setImageUrl4(URL.createObjectURL(fileUploaded))
        setFile4(fileUploaded)
        setIsImage4Updated(true)
      }
      else if(index == 4){
        setImageUrl5(URL.createObjectURL(fileUploaded))
        setFile5(fileUploaded)
        setIsImage5Updated(true)
      }
      else if(index == 5){
        setImageUrl6(URL.createObjectURL(fileUploaded))
        setFile6(fileUploaded)
        setIsImage6Updated(true)
      }
    }
  }

  const submitSpot = async () => {
    console.log("submit")
    console.log("\n=======================")
    console.log(lat)
    console.log(lng)
    

    try {
      //const response = await PostService.createPost(file, data['Title'], stringFromHtml, user.id, data['Description'])
      const response = await SpotService.updateSpot(
        spot_id!,
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
        isImage1Updated ? "true" : "false",
        isImage2Updated ? "true" : "false",
        isImage3Updated ? "true" : "false",
        isImage4Updated ? "true" : "false",
        isImage5Updated ? "true" : "false",
        isImage6Updated ? "true" : "false",
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
          ??????????????????????????????
        </div>

        <div className="description">
          ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? <br />
          ????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </div>
      </div>

      <div className="flowContainer">
        <div className="first">
          01??????????????????
        </div>
        <div className="second active">
          02??????????????????
        </div>
        <div className="third">
          03????????????
        </div>
      </div>

      <div className="basicInfoContainer">
        <div className="headerTitle">
          ????????????
        </div>
        <div className="container">
          <div className="containerInside">
            <div className="description">
              ?????????????????????????????????????????????????????????????????? <br />
              ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </div>
            <div className="inputContainers">
              <div className="inputContainer">
                <div className="title">?????????</div>
                {imageUrl1 ? <img width={300} height={300} src={imageUrl1} alt="postPicture1" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(1)}>?????????????????????</button>
                <input
                  type="file"
                  ref={hiddenFileInput1}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 0)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">?????????</div>
                {imageUrl2 ? <img width={300} height={300} src={imageUrl2} alt="postPicture2" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(2)}>?????????????????????</button>
                <input
                  type="file"
                  ref={hiddenFileInput2}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 1)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">?????????</div>
                {imageUrl3 ? <img width={300} height={300} src={imageUrl3} alt="postPicture3" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(3)}>?????????????????????</button>
                <input
                  type="file"
                  ref={hiddenFileInput3}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 2)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">?????????</div>
                {imageUrl4 ? <img width={300} height={300} src={imageUrl4} alt="postPicture4" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(4)}>?????????????????????</button>
                <input
                  type="file"
                  ref={hiddenFileInput4}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 3)}
                />
              </div>

              <div className="inputContainer">
                <div className="title">?????????</div>
                {imageUrl5 ? <img width={300} height={300} src={imageUrl5} alt="postPicture5" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(5)}>?????????????????????</button>
                <input
                  type="file"
                  ref={hiddenFileInput5}
                  style={{ display: 'none' }}
                  onChange={(e) => handleChange(e, 4)}
                />
                {/* <div className="captionContainer">
                  <span className='title'>??????????????????</span>
                  <input type="text" placeholder='' />
                </div> */}
              </div>
              <div className="inputContainer">
                <div className="title">?????????</div>
                {imageUrl6 ? <img width={300} height={300} src={imageUrl6} alt="postPicture6" />
                  :
                  <img src="" alt="" />
                }
                <button type="button" onClick={() => handleClick(6)}>?????????????????????</button>
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
        <button onClick={(() => submitSpot())}>??????</button>
      </div>

      <div className="buttonContainer">
        <button onClick={(() => submitSpot())}>?????????????????????</button>
      </div>


    </div>
  )
}

export default EditSpotImages