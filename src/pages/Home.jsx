import React from 'react';
import SideBar from "../components/SideBar.jsx";
import "../styles/home.css";
import WarningNotice from "../components/WarningNotice.jsx";
import TwoSectionLayout from "../components/Layout";
import LectureList from "../components/LectureList.jsx";

const Home = () => {

    return (
        <div className="home-container">
            <SideBar/>
            <TwoSectionLayout
            top={<LectureList/>}
            bottom={<WarningNotice/>}
            />
        </div>
    );
};

export default Home;
