import React, { FC, useEffect, useState } from 'react';
import './search.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import RatingService from "../../services/rating-service"
import { IRating } from '../../types/rating-type';
import { IUser } from '../../types/user-type';
import { ISpot } from "../../types/spot-type";
import UserService from '../../services/user-service';
import PrefectureSelect from '../../components/prefecturSelect/PrefectureSelect';
import FeatureSelect from '../../components/featureSelect/FeatureSelect';
import PrefectureList from '../../components/prefectureList/PrefectureList';
import SpotService from '../../services/spot-service';
import SpotItem from '../../components/spotlist/spotitem/SpotItem';
import MediaQuery from "react-responsive";

const Search: FC = () => {
    const search = useLocation().search;

    const navigate = useNavigate()

    const queryString = new URLSearchParams(search);
    const [spots, setSpots] = useState<ISpot[]>([]);
    const [keyword, setKeyword] = useState<string>();
    const [prefecture, setPrefecture] = useState<string>();

    const queryStringHandler = async () => {

        if (queryString.get("q")) {
            const keyword = queryString.get("q") ?? ""
            const response = await SpotService.getSpotByKeyword(keyword)
            var tmpSpots = response.data
            console.log("prefecture")
            console.log(prefecture)
            if (prefecture !== undefined) {
                const filteredSpots = tmpSpots.filter((spot) => (
                    spot.prefecture === prefecture
                ))
                setSpots(filteredSpots)
            }
            else {
                setSpots(tmpSpots)
            }

        }

    }

    const jumpToSearch = () => {
        navigate(`/search?q=${keyword}`)
    }


    useEffect(() => {
        queryStringHandler()
    }, [search])



    const commonJsx = (isMobile: boolean) => {
        return (
            <>
                <div className="searchHeaderTitle">
                    ダイビングスポット検索
                </div>
                <div className="searchHeader">
                    <div className="inputContainer">
                        <div className="area">
                            <PrefectureList setPrefecture={setPrefecture} />
                        </div>

                        <input type="text" placeholder='キーワード' className='keyword' onChange={(e) => { setKeyword(e.target.value) }} />
                        <div className="button" onClick={() => jumpToSearch()}>
                            <div className="icon"></div>
                            <span className='value'>検索</span>
                        </div>
                    </div>
                </div>

                <div className="body">
                    <div className="header">
                        <div className="left">
                            <div className="searchTitle">
                                検索結果一覧
                            </div>
                        </div>
                        <div className="right">
                            <div className="result">
                                <span className='title'>検索結果</span>
                                <span className='number'>{spots.length}</span>
                                <span className='ken'>件</span>
                            </div>
                        </div>
                    </div>

                    <div className="list">
                        <div className="spots">
                            {
                                spots.map((spot) => (
                                    <SpotItem spot={spot} isMobile={isMobile} />

                                ))
                            }
                        </div>
                    </div>
                </div>

            </>

        )
    }



    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className={'searchContainer'}>
                    {commonJsx(false)}
                </div>
            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <div className={'searchContainerMobile'}>
                    {commonJsx(true)}
                </div>
            </MediaQuery>
        </>
    );
};

export default Search;