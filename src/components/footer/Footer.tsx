import React, { FC } from 'react';
import './footer.scss'
import MediaQuery from "react-responsive";


const Footer: FC = () => {
    return (
        <>
            <MediaQuery query="(min-width: 768px)">
                <div className={'footerContainer'}>
                    <div className={'innerContainer'}>
                        <div className="logoContainer">
                        </div>
                        <div className="contentContainer">
                            <div className="header">
                                ダイビングイクンゴ
                            </div>
                        </div>
                        <div className="contentContainer">
                            <div className="header">
                                SNS
                            </div>
                            <div className="value">
                                Twitter
                            </div>
                            <div className="value">
                                Instagram
                            </div>
                        </div>
                    </div>
                </div>

            </MediaQuery>

            <MediaQuery query="(max-width: 767px)">
                <div className={'footerContainerMobile'}>
                    <div className={'innerContainer'}>
                        <div className="logoContainer">
                        </div>
                        <div className="contentContainer">
                            <div className="header">
                                ダイビングイクンゴ
                            </div>
                        </div>
                        <div className="contentContainer">
                            <div className="header">
                                SNS
                            </div>
                            <div className="value">
                                Twitter
                            </div>
                            <div className="value">
                                Instagram
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    );
};

export default Footer;