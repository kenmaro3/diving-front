import React, { FC, useState, useRef, useEffect } from 'react';
import './navbar.scss'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logout, setIsAuth } from "../../store/reducers/auth/action-creators";
import { useAppSelector } from "../../hooks";
import SearchBar from '../searchBar/SearchBar';
import ProfileMenu from '../profileMenu/ProfileMenu';

const Navbar: FC = () => {
    const navigate = useNavigate()
    const { isAuth, user } = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const [functionsForProfileMenu, setFunctionsForProfileMenu] = useState<Map<string, any>>(new Map([]))

    const handleLogout = () => {
        dispatch(logout())
        dispatch(setIsAuth(false))
        navigate('/login')
    }
    const jumpToProfile = () => {
        navigate(`/profile`)
    }

    const jumpToCreateSpot = () => {
        navigate('/spots/new')
    }

    const jumpToSpots = () => {
        navigate('/search')

    }


    useEffect(() => {
        setFunctionsForProfileMenu(functionsForProfileMenu.set("プロフィールを見る", jumpToProfile))
        setFunctionsForProfileMenu(functionsForProfileMenu.set("ダイビングスポット一覧", jumpToSpots))
        setFunctionsForProfileMenu(functionsForProfileMenu.set("新規スポットの投稿", jumpToCreateSpot))
        setFunctionsForProfileMenu(functionsForProfileMenu.set("ログアウト", handleLogout))
    }, [])

    return (
        <header className='navbarContainer'>
            <div className={'left'}>
                <Link to={'/'} className={'globalLink'}>
                    <div className="title">ダイビングイクンゴ</div>
                </Link>
                {/* <h1 className={'title'}>ProtoHub</h1> */}
                {/* <SearchBar placeholder='Search or jump to...' /> */}

            </div>
            <div className={'right'}>
                {isAuth ?
                    <div>

                        <ProfileMenu user={user} functions={functionsForProfileMenu}>
                            <div className="navbarProfileImageContainer">
                                <img className='profileImage' src={user.profile_picture} alt="avatar" />
                                <span className="caret caret-reversed"></span>
                            </div>

                        </ProfileMenu>
                    </div>
                    :
                    <>
                        <Link to={'/login'}>
                            <button className={'loginButton'}>ログイン</button>
                        </Link>
                        <Link to={'/login?show=signup'}>
                            <button className={'signupButton'}>新規登録</button>
                        </Link>
                    </>
                }

            </div>
        </header>
    );
};

export default Navbar;