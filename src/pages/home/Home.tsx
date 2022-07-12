import React, { FC, useState, useEffect } from 'react';
import './home.scss'
import SearchBar from "../../components/searchBar/SearchBar"
import Map from "../../components/map/Map"
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RatingList from '../../components/ratinglist/RatingList';
import PrefectureSelect from '../../components/prefecturSelect/PrefectureSelect';
import FeatureSelect from '../../components/featureSelect/FeatureSelect';
import SpotList from '../../components/spotlist/SpotList';
import News from '../../components/news/News';
import { Link } from 'react-router-dom';
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import MediaQuery from "react-responsive";

function useWatch(interval: number) {
    const [time, updateTime] = useState(Date.now());

    useEffect(() => {
        const timeoutId = setTimeout(() => updateTime(Date.now()), interval);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [time]); // eslint-disable-line react-hooks/exhaustive-deps

    return time;
}

const Home: FC = () => {
    const time = useWatch(1)
    const { spots } = useSelector((state: RootState) => state.spots)
    const [index, setIndex] = useState(0)
    const [name, setName] = useState("image0")
    useEffect(() => {
        const tmp = Math.floor(time / 8000 % 4)
        setIndex(tmp)

    }, [time])

    useEffect(() => {
        setName(`image${index}`)
    }, [index])

    useEffect(() => {
        console.log("this is my spots")
        console.log(spots)

    }, [])

    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className={'homeContainer'}>
                    <div className={`backgroundBehind ${name}`}>
                        <div className="topBackground">
                            <div className="container">
                                <div className="banner">
                                    お気に入りのダイビングスポットが見つかる口コミサイト
                                </div>
                                <div className="search">

                                    <div className="titleContainer">
                                        <div className="title">
                                            ダイビング
                                        </div>
                                        <div className="title2">
                                            イクンゴ
                                        </div>
                                    </div>
                                    {/* <div className="segContainer">
                                <button className='button button1 selected'>キーワードから探す</button>
                                <PrefectureSelect className="buttonContainer">
                                    <button className='button button2'>都道府県から探す</button>
                                </PrefectureSelect>

                                <FeatureSelect className="buttonContainer">
                                    <button className='button button3'>特徴から探す</button>
                                </FeatureSelect>

                            </div> */}
                                    <div className="searchContainer">

                                        <SearchBar placeholder='スポット名称、エリア、キーワード' isMobile={false}/>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="grayBody">
                        <div className="mapContainer">
                            <div className="header">
                                <div className="title">
                                    ダイビングマップ
                                </div>
                                <div className="description">
                                    ユーザー参加型のダイビングスポットデータベースに参加してみよう。
                                </div>
                            </div>
                            <div className="subHeader">
                                <span className='first'>現在</span>
                                <span className='second'>{spots.length}</span>
                                <span className='third'>件のダイビングスポットが登録されています。</span>
                            </div>
                            <div className="subHeader">
                                <span className='first'>スポットに緯度経度の情報がある場合、マップに表示されます。</span>
                            </div>
                            <div className="body">
                                <Map spots={spots} />

                            </div>

                        </div>

                    </div>
                    <div className="whiteBody">
                        <div className="newPostContainer">
                            <div className="header">
                                <div className="title">
                                    新着口コミ
                                </div>
                                <div className="description">
                                    ダイビングに行った記録や口コミを残してみよう。
                                </div>
                            </div>
                            <div className="body">
                                <RatingList isMobile={false} />
                                <div className="more">
                                    <Link to="/ratings">
                                        <button>もっと見る</button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="newPlaceContainer">
                            <div className="header">
                                <div className="title">
                                    新着スポット
                                </div>
                                <div className="description">
                                    最近投稿されたスポットを確認しよう。
                                </div>
                            </div>
                            <div className="body">
                                <div className="contentContainer">
                                    <SpotList isMobile={false}/>
                                </div>
                                <div className="more">
                                    <Link to="/search">
                                        <button>もっと見る</button>
                                    </Link>
                                    <Link to="/spots/new">
                                        <button>投稿する</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grayBody">
                        <div className="homeNewsContainer">
                            <div className="header">
                                <div className="title">
                                    お知らせ
                                </div>
                                <div className="description">
                                    ダイビングイクンゴからのお知らせ。
                                    {/* <a>Twitter</a>でも情報発信中。 */}
                                </div>
                            </div>
                            <div className="body">
                                <News />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>


            <MediaQuery query="(max-width: 767px)">
                <div className={'homeContainerMobile'}>
                    <div className={`backgroundBehind ${name}`}>
                        <div className="topBackground">
                            <div className="container">
                                <div className="banner">
                                    お気に入りのダイビングスポットが見つかる口コミサイト
                                </div>
                                <div className="search">

                                    <div className="titleContainer">
                                        <div className="title">
                                            ダイビング
                                        </div>
                                        <div className="title2">
                                            イクンゴ
                                        </div>
                                    </div>
                                    {/* <div className="segContainer">
                                <button className='button button1 selected'>キーワードから探す</button>
                                <PrefectureSelect className="buttonContainer">
                                    <button className='button button2'>都道府県から探す</button>
                                </PrefectureSelect>

                                <FeatureSelect className="buttonContainer">
                                    <button className='button button3'>特徴から探す</button>
                                </FeatureSelect>

                            </div> */}
                                    <div className="searchContainer">

                                        <SearchBar placeholder='スポット名称、エリア、キーワード' isMobile={true}/>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="grayBody">
                        <div className="mapContainer">
                            <div className="header">
                                <div className="title">
                                    ダイビングマップ
                                </div>
                                <div className="description">
                                    ユーザー参加型のダイビングスポットデータベースに参加してみよう。
                                </div>
                            </div>
                            <div className="subHeader">
                                <span className='first'>現在</span>
                                <span className='second'>{spots.length}</span>
                                <span className='third'>件のダイビングスポットが登録されています。</span>
                            </div>
                            <div className="subHeader">
                                <span className='first'>スポットに緯度経度の情報がある場合、マップに表示されます。</span>
                            </div>
                            <div className="body">
                                <Map spots={spots} />

                            </div>

                        </div>

                    </div>
                    <div className="whiteBody">
                        <div className="newPostContainer">
                            <div className="header">
                                <div className="title">
                                    新着口コミ
                                </div>
                                <div className="description">
                                    ダイビングに行った記録や口コミを残してみよう。
                                </div>
                            </div>
                            <div className="body">
                                <RatingList isMobile={false} />
                                <div className="more">
                                    <Link to="/ratings">
                                        <button>もっと見る</button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="newPlaceContainer">
                            <div className="header">
                                <div className="title">
                                    新着スポット
                                </div>
                                <div className="description">
                                    最近投稿されたスポットを確認しよう。
                                </div>
                            </div>
                            <div className="body">
                                <div className="contentContainer">
                                    <SpotList isMobile={true}/>
                                </div>
                                <div className="more">
                                    <Link to="/search">
                                        <button>もっと見る</button>
                                    </Link>
                                    <Link to="/spots/new">
                                        <button>投稿する</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grayBody">
                        <div className="homeNewsContainer">
                            <div className="header">
                                <div className="title">
                                    お知らせ
                                </div>
                                <div className="description">
                                    ダイビングイクンゴからのお知らせ。
                                    {/* <a>Twitter</a>でも情報発信中。 */}
                                </div>
                            </div>
                            <div className="body">
                                <News />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    );
};

export default Home;