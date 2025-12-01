import React from 'react';
import SideBar from "../components/SideBar.jsx";
import "../styles/home.css";
import InfoNotice from "../components/InfoNotice.jsx";
import WarningNotice from "../components/WarningNotice.jsx";
import TwoSectionLayout from "../components/Layout";

const Home = () => {

    return (
        <div className="home-container">
            <SideBar/>
            <TwoSectionLayout
            top={<InfoNotice/>}
            bottom={<WarningNotice/>}
            />
        </div>
    );
};

export default Home;
