import React from 'react';
import '../styles/logout.css';
import useUserStore from "../store/userStore.js";
import {useNavigate} from "react-router-dom";
import {LuDoorOpen} from "react-icons/lu";

const Logout = () => {
    const { setUser } = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmed = window.confirm("로그아웃 하시겠습니까?");
        if (!confirmed) return;

        localStorage.clear();

        setUser(null);
        navigate("/login");
    };

    return (
        <div className="logout-container">
            <div className="logout-header">
                <span className="door"><LuDoorOpen /></span>
                <button className="logout-btn" onClick={handleLogout}>
                    로그아웃
                </button>
            </div>
        </div>
    );
}

export default Logout;