import React, { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import NotFound from "../../pages/404/NotFound";
import RequireAuth from "./RequireAuth";
import Profile from "../../pages/profile/Profile";
import Rating from "../../pages/rating/Rating"
import Spot from "../../pages/spot/Spot";
import { motion } from "framer-motion";
import Search from '../../pages/search/Search';
import CreateSpot from '../../pages/createSpot/CreateSpot';
import ProfileEdit from '../../pages/profile/ProfileEdit';
import AllRatings from '../../pages/allRatings/AllRatings';
import CreateRating from '../../pages/createRating/CreateRating';
import RatingSpotAll from '../../pages/ratingSpotAll/RatingSpotAll';
import EditSpot from '../../pages/editSpot/EditSpot';

import SpotImages from '../../pages/spotImages/SpotImages';
import EditSpotImages from '../../pages/editSpotImages/EditSpotImages';


const AppRoutes: FC = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home />} />
                <Route path={'login'} element={<Login />} />
                <Route path={'register'} element={<Register />} />
                <Route path={'search'} element={<Search />} />
                <Route path={'ratings'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><AllRatings/></motion.div>} />
                <Route path={'ratings/:rating_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Rating/></motion.div>} />
                <Route path={'ratings/spot/:spot_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><RatingSpotAll/></motion.div>} />
                <Route path={'spots/:spot_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Spot/></motion.div>} />
                <Route path={'spots/:spot_id/posts'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Spot/></motion.div>} />
                <Route path={'profiles/:user_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Profile /></motion.div>} />
                <Route element={<RequireAuth />}>
                    <Route path={'spots/edit/:spot_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><EditSpot/></motion.div>} />
                    <Route path={'posts/new/:spot_id'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><CreateRating/></motion.div>} />
                    <Route path={'spots/images/new'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><SpotImages/></motion.div>} />
                    <Route path={'spots/:spot_id/images/edit'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><EditSpotImages/></motion.div>} />
                    <Route path={'spots/new'} element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><CreateSpot/></motion.div>} />
                    <Route path={'profile/edit'} element={<ProfileEdit/>} />
                    <Route path={'profile'} element={<Profile />} />
                </Route>
                <Route path={'*'} element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;