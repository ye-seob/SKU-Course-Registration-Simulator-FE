// Home.jsx

import React from 'react';
import SideBar from "../components/SideBar.jsx";
import "../styles/home.css";
import TwoSectionLayout from "../components/Layout";
import LectureList from "../components/LectureList.jsx";
import CartList from "../components/CartList.jsx";
import {SearchProvider} from "../context/SearchContext.jsx";

const Home = () => {
    return (
        <SearchProvider>
            <div className="home-container">
                <SideBar/>
                <TwoSectionLayout
                    top={<LectureList/>}
                    bottom={<CartList/>}
                />
            </div>
        </SearchProvider>
    );
};

export default Home;
