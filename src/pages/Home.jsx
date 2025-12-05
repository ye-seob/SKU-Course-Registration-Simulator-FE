import React from 'react';
import SideBar from "../components/SideBar.jsx";
import "../styles/home.css";
import TwoSectionLayout from "../components/Layout";
import LectureList from "../components/LectureList.jsx";
import CartList from "../components/CartList.jsx";

const Home = () => {

    return (
        <div className="home-container">
            <SideBar/>
            <TwoSectionLayout
            top={<LectureList/>}
            bottom={<CartList/>}
            />
        </div>
    );
};

export default Home;
