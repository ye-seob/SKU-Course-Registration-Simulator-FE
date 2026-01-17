import React, {useEffect, useState} from 'react';
import '../styles/login.css';
import {login} from "../api/login.js";
import {useNavigate} from "react-router-dom";

const logoUrl = "/image/logo.gif";
const loginBtnUrl = "/image/login.gif";

const Login = () => {
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [remainTime, setRemainTime] = useState("");
    const [nextOpenTime, setNextOpenTime] = useState("");

    useEffect(() => {
        const updateRemainTime = () => {
            const now = new Date();
            const hour = now.getHours();

            let targetTime = new Date(now);

            // 15시 이후 → 다음날 08시
            if (hour >= 15) {
                targetTime.setDate(targetTime.getDate() + 1);
                targetTime.setHours(8, 0, 0, 0);
            }
            // 08시 이전 → 당일 08시
            else if (hour < 8) {
                targetTime.setHours(8, 0, 0, 0);
            }
            // 08 ~ 14시 → 다음 정각
            else {
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
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({studentId, password});
            navigate('/');
        } catch (e) {
            alert(e.response?.data?.message || "로그인 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="login-container">
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        ※ 최초수강신청하는 신·편입생의 경우 반드시 포탈 로그인 후 <br/>
                        이용하시기 바랍니다.
                    </div>
                </div>
            </main>

            <footer className="external-warning-container">
                <div className="external-text">
                    ※ 하나의 인터넷창으로만 수강신청 하실 수 있습니다. 유의하시기 바랍니다.
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
