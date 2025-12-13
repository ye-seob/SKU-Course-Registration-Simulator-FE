import React from "react";
import Router from "./routes/Router.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className="App">
            <ToastContainer
                position="top-right"   // 알림 위치
                autoClose={3000}       // 자동 닫힘 시간 (ms)
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <Router/>
        </div>
    );
};

export default App;