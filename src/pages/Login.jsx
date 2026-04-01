import React, {useEffect, useState} from 'react';
import '../features/user/styles/login.css';
import {login} from "../features/user/api/login.js";
import {useNavigate} from "react-router-dom";
import useViewStore from "../features/view/store/viewStore.js";
import {useMode} from "../mode/hooks/useMode.js";

const logoUrl = "/image/logo.gif";
const loginBtnUrl = "/image/login.gif";

const Login = () => {
    const [studentId, setStudentId] = useState("");
    const navigate = useNavigate();
    const {config , mode} = useMode();

    const [remainTime, setRemainTime] = useState("");
    const [nextOpenTime, setNextOpenTime] = useState("");

    const finishIntro = useViewStore((s) => s.finishIntro);
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
        ƒ
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            finishIntro(false)
            await login({studentId, loginMode: mode });

            navigate('/');
        } catch (e) {
            alert(e.response?.data?.message || "로그인 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="login">
            <header className="login__header">
                <div className="login__logo-area">
                    <img src={logoUrl} alt="서경대학교 SEOKYEONG UNIVERSITY" className="login__logo-img"/>
                </div>
                <div className="login__title">(서경대 학부 모의 {config.title})</div>
            </header>

            <main className="login__box">
                <form className="login__form" onSubmit={handleLogin}>
                    <div className="login__inputs">
                        <div className="login__input-row">
                            <label className="login__label">아이디</label>
                            <input
                                type="text"
                                className="login__input"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                            />
                        </div>
                        <div className="login__input-row">
                            <label className="login__label">비밀번호</label>
                            <input
                                type="password"
                                className="login__input"
                                disabled
                            />
                        </div>
                    </div>

                    {/* 로그인 버튼 */}
                    <button type="submit" className="login__submit"
                            style={{background: 'none', border: 'none', padding: 0}}>
                        <img src={loginBtnUrl} alt="loginBtn"/>
                    </button>
                </form>

                <div className="login__signup-link"
                     onClick={() => navigate('/signup')} style={{cursor: 'pointer'}}>
                    [회원가입]
                </div>

                <div className="login__warning">
                    <div className="login__warning-text">
                        ※ 본 서비스는 개인 개발자가 운영하는 비공식 모의 서비스입니다.
                    </div>
                    <div className="login__warning-text">
                        가입된 학번과 닉네임은 수강신청 종료 후 폐기 예정입니다.
                    </div>
                </div>
            </main>

            <footer className="login__footer">
                <div className="login__warning-text">
                    {config.description}
                </div>
            </footer>


            <div className="login__remain-time">
                다음 수강신청 시작까지 남은 시간<br/>
                <strong>{remainTime}</strong>
            </div>

            <a
                href="https://leather-octopus-0ff.notion.site/2ebbf7b8d39f80d58afffc3749a9f693?pvs=73"
                target="_blank"
                rel="noopener noreferrer"
                className="login__guide-link"
            >
                📖 모의 수강신청 가이드 보러가기
            </a>
        </div>
    );
};
export default Login;
