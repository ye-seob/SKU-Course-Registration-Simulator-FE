import React from 'react';
import '../styles/logout.css';
import useUserStore from "../store/userStore.js";
import {useNavigate} from "react-router-dom";

const imgUrl = "/image/logout.gif";

const Logout = () => {
    const { setUser } = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm("로그아웃 하시겠습니까?");
        if (!confirmed) return;

        localStorage.removeItem("user")
        localStorage.removeItem("view-storage")
        localStorage.removeItem("search-storage")
        localStorage.removeItem("ratingTooltip")
        localStorage.removeItem("accessToken")

        setUser(null);
        navigate("/home");

        window.location.reload();
    };

    return (
        <div className="logout">
            <div className="section__header">
                <img src={imgUrl} alt="logoutIcon" className="section__icon"/>
                <button className="logout__button" onClick={handleLogout}>
                    로그아웃
                </button>
            </div>
        </div>
    );
}

export default Logout;