import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from '../pages/Home.jsx';
import Signup from "../pages/Signup.jsx";
import Login from "../pages/Login.jsx";

const Router = () => {
    return (
        <Routes>
            {/* 메인 경로 (/) */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* 일치하는 경로가 없을 때 보여줄 404 페이지 */}
            <Route path="*" element={<div><h1>404</h1><p>페이지를 찾을 수 없습니다.</p></div>} />
        </Routes>
    );
};

export default Router;
