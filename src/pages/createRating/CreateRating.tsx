import React, { FC, useState, useEffect } from 'react';
import './createrating.scss'
import FileUpload from "../../components/fileUpload/FileUpload";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import RatingService from "../../services/rating-service";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { fetchTodayRatings, setAddRating } from "../../store/reducers/rating/action-creators";
import { CircularProgress } from "@mui/material";
import { useTitle } from "../../hooks";
import { Rating } from 'react-simple-star-rating'
import MediaQuery from "react-responsive";


const CreateRating: FC = () => {
    const { spot_id } = useParams()
    const [file, setFile] = useState<any>(null)
    const { user } = useSelector((state: RootState) => state.auth)
    const [isError, setIsError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [text, setText] = useState<string>("")

    const [water, setWater] = useState<string>("")
    const [animal, setAnimal] = useState<string>("")
    const [activity, setActivity] = useState<string>("")

    const [waterRating, setWaterRating] = useState<number>(0)
    const [animalRating, setAnimalRating] = useState<number>(0)
    const [activityRating, setActivityRating] = useState<number>(0)

    const location = useLocation()
    const [state, setState] = useState(location.state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useTitle('Create new')

    const [spotName, setSpotName] = useState<string>("");

    useEffect(() => {
        setSpotName((state as { spot_name: string }).spot_name)

    }, [])

    const handleWaterRating = (rate: number) => {
        const tmp = rate / 20
        console.log(`waterRating: ${tmp}`)
        setWaterRating(tmp)
    }

    const handleAnimalRating = (rate: number) => {
        const tmp = rate / 20
        console.log(`animalRating: ${tmp}`)
        setAnimalRating(tmp)
    }

    const handleActivityRating = (rate: number) => {
        const tmp = rate / 20
        console.log(`ActivityRating: ${tmp}`)
        setActivityRating(tmp)
    }



    const submitRating = async (data: any) => {
        // const stringFromHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        setIsLoading(true)
        try {
            //const response = await RatingService.createRating(file, data['Title'], stringFromHtml, user.id, data['Description'])
            const response = await RatingService.createRating(user.id, Number(spot_id),
                water, animal, activity, waterRating, animalRating, activityRating, text
            )
            dispatch(setAddRating(response.data))
            dispatch(fetchTodayRatings(5))
            navigate(`/ratings/${response.data.id}`)
        } catch (e: any) {
            const response = e.response.data.message
            if (Array.isArray(response)) setIsError(response[0])
            else setIsError(response)
            console.log(e.response)
        } finally {
            setIsLoading(false)
        }
    }

    const commonJsx = () => {
        return (

            <div className="innerMargin">
                <div className="header">
                    <div className={'buttonContainer'}>
                        <button className='ratingButton' onClick={submitRating}>
                            投稿する {isLoading && <CircularProgress style={{ color: 'white' }} size={20} />}
                        </button>
                        {isError && <div className={'alert danger'}>{isError}</div>}
                    </div>
                </div>



                <div className="spotNameContainer">
                    <span className="spotName">{spotName}</span>
                    <span className="spotName2">についての口コミ</span>
                </div>
                <div className="containerInside">
                    <div className="description">
                        ダイビングスポットの口コミを投稿しましょう。<br />
                        水質や出会える生き物、可能なアクティビティの情報を追加しましょう。
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
                                    size={18}
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
                                    size={18}
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
                                    ratingValue={activityRating}
                                    size={18}
                                    transition
                                    fillColor='orange'
                                    emptyColor='gray'
                                    className='foo' // Will remove the inline style if applied
                                />
                                <span className='ratingValue'>
                                    {activityRating}
                                </span>
                            </div>
                            <textarea name="" id="" rows={4} value={activity} onChange={(e) => setActivity(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
                <div className="inputContainers">
                    <h3>ダイビングスポット体験談</h3>
                    <div className="inputContainer">
                        <textarea onChange={(e) => { setText(e.target.value) }} value={text} name="" id="" rows={10}></textarea>
                    </div>
                </div>
                {/* <div className={'ratingInner'}>
                    <FileUpload
                        displayImage={true}
                        handleFile={(file: File | undefined) => setFile(file)}
                    />

                </div> */}

            </div>
        )

    }


    return (
        <>
         <MediaQuery query="(min-width: 768px)">
            <div className={'createRatingContainer'}>
                {commonJsx()}
            </div>

         </MediaQuery>

         <MediaQuery query="(max-width: 767px)">
            <div className={'createRatingContainerMobile'}>
                {commonJsx()}
            </div>


         </MediaQuery>
        
        </>

    );
};

export default CreateRating;