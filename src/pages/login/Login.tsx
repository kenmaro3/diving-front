import React, { FC, useEffect, useState } from 'react';
import './login.scss'
import Button from "../../components/common/button/Button";
import FormGroup from "../../components/common/formGroup/FormGroup";
import Hr from "../../components/common/hr/Hr";
import { useDispatch } from "react-redux";
import { login, registration, setError } from "../../store/reducers/auth/action-creators";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useTitle } from "../../hooks";
import { useForm } from "react-hook-form";
import { setFlagsFromString } from 'v8';
import MediaQuery from "react-responsive";

const Login: FC = () => {
    const search = useLocation().search;
    const queryString = new URLSearchParams(search);
    const { isLoading, error, isAuth } = useAppSelector(state => state.auth)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [email, setEmail] = useState<string>("")
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const dispatch = useDispatch()

    const [loginOrSignUp, setLoginOrSignUp] = useState<string>("login")
    useTitle('Log in')

    useEffect(() => {
        const keyword = queryString.get("show") ?? ""
        if (keyword === "signup") {
            setLoginOrSignUp("signup")
        }
        else {
            setLoginOrSignUp("login")

        }
        dispatch(setError(''))
    }, [dispatch, search])

    const onSubmitSignIn = (data: any) => {
        dispatch(login(email, password))
    }

    const onSubmitSignUp = (data: any) => {
        dispatch(registration(username, email, password))
        // dispatch(login(data.Email, data.Password))
    }

    const setLogin = () => {
        setLoginOrSignUp("login")
    }
    const setSignUp = () => {
        setLoginOrSignUp("signup")
    }

    const loginJsx = () => {
        return (

            <div className="inputContainer">
                <div className="emailContainer">
                    <div className="header">
                        ????????????????????????????????????
                    </div>
                    <div className="email">
                        <div className="title">
                            ?????????????????????
                        </div>
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password">
                        <div className="title">
                            ???????????????
                        </div>
                        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="buttonContainer">
                    <button type="submit" onClick={onSubmitSignIn}>??????????????????</button>
                </div>

                <div className="signUpButtonContainer">
                    <div className="button">???????????????????????????</div>
                </div>

            </div>

        )
    }

    const signUpJsx = () => {
        return (
            <div className="inputContainer">
                <div className="emailContainer">
                    <div className="header">
                        ??????????????????????????????
                    </div>
                    <div className="email">
                        <div className="title">
                            ?????????????????????
                        </div>
                        <input type="email" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    </div>
                    <div className="username">
                        <div className="title">
                            ????????????
                        </div>
                        <input type="text" name='username' onChange={(e) => { setUsername(e.target.value) }} value={username} />
                    </div>
                    <div className="password">
                        <div className="title">
                            ???????????????
                        </div>
                        <input type="password" name='password' onChange={(e) => { setPassword(e.target.value) }} value={password} />
                    </div>
                </div>

                <div className="buttonContainer">
                    <button type="submit" onClick={onSubmitSignUp}>????????????</button>
                </div>


            </div>
        )
    }

    const commonJsx = () => {
        return (
            <>
                {isAuth && <Navigate to={'/'} />}
                {error && <div className={'registerError'}>
                    {error}
                </div>}

                <div className="containerInside">
                    <div className="tabContainer">
                        <div className={`tab1 ${loginOrSignUp == "login" && "active"}`} onClick={() => setLogin()}>
                            ????????????
                        </div>
                        <div className={`tab2 ${loginOrSignUp == "signup" && "active"}`} onClick={() => setSignUp()}>
                            ????????????
                        </div>
                    </div>

                    {(() => {
                        if (loginOrSignUp === "login") {
                            return (
                                loginJsx()
                            )
                        }
                        else {
                            return (
                                signUpJsx()
                            )

                        }
                    })()
                    }
                </div>


            </>

        )
    }


    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className={'loginContainer'}>
                    {commonJsx()}
                </div>
            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <div className={'loginContainerMobile'}>
                    {commonJsx()}
                </div>
            </MediaQuery>

        </>
    );
};

export default Login;