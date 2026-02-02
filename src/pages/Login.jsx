import React, {useEffect, useState} from 'react';
import '../styles/login.css';
import {login} from "../api/login.js";
import {useNavigate} from "react-router-dom";
import useViewStore from "../store/viewStore.js";

const logoUrl = "/image/logo.gif";
const loginBtnUrl = "/image/login.gif";

const Login = () => {
    const [studentId, setStudentId] = useState("");
    const navigate = useNavigate();

    const [remainTime, setRemainTime] = useState("");
    const [nextOpenTime, setNextOpenTime] = useState("");
    const [loginMode, setLoginMode] = useState("ENROLL");
    const setMode = useViewStore((state) => state.setMode);
    useEffect(() => {
        const updateRemainTime = () => {
            const now = new Date();
            const hour = now.getHours();

            let targetTime = new Date(now);

            if (hour < 8) {
                // 08시 이전 → 오늘 08시
                targetTime.setHours(8, 0, 0, 0);
            } else if (hour >= 22) {
                // 22시 이후 → 다음날 08시
                targetTime.setDate(targetTime.getDate() + 1);
                targetTime.setHours(8, 0, 0, 0);
            } else {
                // 08 ~ 22시 → 다음 정각
                targetTime.setHours(hour + 1, 0, 0, 0);
            }

            const diff = targetTime - now;

            const hours = Math.floor(diff / 1000 / 60 / 60);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setRemainTime(
                `${String(hours).padStart(2, '0')}시간 ${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')}초`
            );

            const hh = String(targetTime.getHours()).padStart(2, '0');
            setNextOpenTime(`${hh}:00`);
        };

        updateRemainTime();
        const timer = setInterval(updateRemainTime, 1000);
        return () => clearInterval(timer);
ƒ    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({studentId,});
            navigate('/');
            setMode(loginMode);
            localStorage.setItem("loginMode", "ENROLL");
        } catch (e) {
            alert(e.response?.data?.message || "로그인 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="login-container">

            <div className="login-mode-wrapper">
                <div className="login-mode-title">
                    이용하실 서비스를 선택해 주세요
                </div>

                <div className="login-mode-selector">
                    <button
                        type="button"
                        className={`mode-card ${loginMode === "ENROLL" ? "active" : ""}`}
                        onClick={() => setLoginMode("ENROLL")}
                    >
                        <div className="mode-main">수강신청</div>
                        <div className="mode-sub">수강신청 연습</div>
                    </button>

                    <button
                        type="button"
                        className={`mode-card ${loginMode === "CART" ? "active" : ""}`}
                        onClick={() => setLoginMode("CART")}
                    >
                        <div className="mode-main">장바구니</div>
                        <div className="mode-sub">강의 담아보기</div>
                    </button>
                </div>
            </div>
            <header className="login-header">
                <div className="logo-area">
                    <img src={logoUrl} alt="서경대학교 SEOKYEONG UNIVERSITY" className="logo-img"/>
                </div>
                <div className="login-header-title">(서경대 학부 모의 수강신청)</div>
            </header>

            <main className="login-box">
                <form className="login-form-area" onSubmit={handleLogin}>
                    <div className="input-group">
                        <div className="input-row">
                            <label className="input-label">아이디</label>
                            <input
                                type="text"
                                className="input-field"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                            />
                        </div>
                        <div className="input-row">
                            <label className="input-label">비밀번호</label>
                            <input
                                type="password"
                                className="input-field"
                                disabled
                            />
                        </div>
                    </div>

                    {/* 로그인 버튼 */}
                    <button type="submit" className="btn-img" style={{background: 'none', border: 'none', padding: 0}}>
                        <img src={loginBtnUrl} alt="loginBtn"/>
                    </button>
                </form>

                <div className="link">
                    <div
                        className="signup-link"
                        onClick={() => navigate('/signup')}
                        style={{cursor: 'pointer'}}
                    >
                        [회원가입]
                    </div>
                </div>

                <div className="internal-warning">
                    <div className="warning-text">
                        ※ 본 서비스는 개인 개발자가 운영하는 비공식 모의 서비스입니다.
                    </div>
                    <div className="warning-text">
                        가입된 학번과 닉네임은 수강신청 종료 후 폐기 예정입니다.
                    </div>
                </div>
            </main>

            <footer className="external-warning-container">
                <div className="external-text">
                    ※ 강의의 평점 부분을 클릭하시면 평점을 매길 수 있습니다.
                </div>
                <div className="external-text">
                    ※ wifi로 접속하여 스마트폰이나 노트북으로 수강신청시 통신이나 보안규약에<br/>
                    문제가 생겨 정상적인 수강신청 처리가 안될 수 있으니 PC에서 수강신청하시기<br/>
                    바랍니다.
                </div>
            </footer>


            <div className="remain-time">
                다음 수강신청 시작까지 남은 시간<br/>
                <strong>{remainTime}</strong>
            </div>

            <a
                href="https://leather-octopus-0ff.notion.site/2ebbf7b8d39f80d58afffc3749a9f693?pvs=73"
                target="_blank"
                rel="noopener noreferrer"
                className="guide-link"
            >
                📖 모의 수강신청 가이드 보러가기
            </a>
        </div>
    );
};
export default Login;
