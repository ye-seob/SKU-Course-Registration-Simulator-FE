import React, {useState} from 'react';
import '../styles/login.css';
import {login} from "../api/login.js";
import {useNavigate} from "react-router-dom";

const logoUrl = "/image/logo.gif";
const loginBtnUrl = "/image/login.gif";


const Login = () => {
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            await login({ studentId, password });
            navigate('/');
        } catch (e) {
            alert(e.response?.data?.message || "로그인 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <div className="logo-area">
                    <img src={logoUrl} alt="서경대학교 SEOKYEONG UNIVERSITY" className="logo-img" />
                </div>
                <div className="login-header-title">(서경대 학부 수강신청)</div>
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
                    <button type="submit" className="btn-img" style={{ background: 'none', border: 'none', padding: 0 }}>
                        <img src={loginBtnUrl} alt="loginBtn" />
                    </button>
                </form>

                <div className="link">
                    <div className="find-id-link">[학번찾기]</div>
                    <div
                        className="signup-link"
                        onClick={() => navigate('/signup')}
                        style={{ cursor: 'pointer' }}
                    >
                        [회원가입]
                    </div>
                </div>

                <div className="internal-warning">
                    <div className="warning-text">
                        ※ 비밀번호는 포탈비밀번호와 동일합니다. 유의하시기 바랍니다.
                    </div>
                    <div className="warning-text">
                        ※ 최초수강신청하는 신·편입생의 경우 반드시 포탈 로그인 후 <br />
                        이용하시기 바랍니다.
                    </div>
                </div>
            </main>

            <footer className="external-warning-container">
                <div className="external-text">
                    ※ 하나의 인터넷창으로만 수강신청 하실 수 있습니다. 유의하시기 바랍니다.
                </div>
                <div className="external-text">
                    ※ wifi로 접속하여 스마트폰이나 노트북으로 수강신청시 통신이나 보안규약에<br />
                    문제가 생겨 정상적인 수강신청 처리가 안될 수 있으니 PC에서 수강신청하시기<br />
                    바랍니다.
                </div>
            </footer>
        </div>
    );
};
export default Login;
