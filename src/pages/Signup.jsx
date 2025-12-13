import React, {useState} from 'react';
import '../styles/signupPage.css';
import {MAJOR} from "../utils/constant.js";
import {useSignup} from "../hooks/useSignup.js";

const logoUrl = "https://s.skuniv.ac.kr/course/img/sugang/logo2.gif";

const Signup = () => {
    const [formData, setFormData] = useState({
        studentId: "",
        name: "",
        password: "",
        major: "소프트웨어학과",
        minor: "없음",
        convergenceMajor: "없음",
        grade: "1"
    });

    const signupMutation = useSignup();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signupMutation.mutate(formData);
    }

        return (
        <div className="signup-container">
            <div className="signup-card">
                <header className="signup-header">
                    <div className="header-nav">
                        <div className="back-arrow" onClick={() => window.history.back()}>
                            &lt;
                        </div>
                        <div className="signup-logo-area">
                            <img src={logoUrl} alt="서경대학교" className="logo-image" />
                        </div>
                    </div>
                    <div className="section-header">
                        <span className="plus-icon">■</span>
                        <h2 className="section-title">회원정보 입력</h2>
                    </div>
                </header>

                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group-row">
                        <div className="input-box">
                            <label>학번</label>
                            <input
                                type="text"
                                name="studentId"
                                placeholder="학번을 입력하세요"
                                value={formData.studentId}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>이름</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="이름을 입력하세요"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-box full-width">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호를 입력해주세요"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="section-divider">정보</div>

                    <div className="input-box full-width">
                        <label>학과(주전공)</label>
                        <select name="major" value={formData.major} onChange={handleChange}>
                            {MAJOR.map(major => (
                                <option key={major} value={major}>
                                    {major}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group-row">
                        <div className="input-box">
                            <label>부전공 (선택)</label>
                            <select name="minor" value={formData.minor} onChange={handleChange}>
                                <option value="없음">없음</option>
                                {MAJOR.map(major => (
                                    <option key={major} value={major}>
                                        {major}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-box">
                            <label>융합전공 (선택)</label>
                            <select name="convergenceMajor" value={formData.convergenceMajor} onChange={handleChange}>
                                <option value="없음">없음</option>
                                {MAJOR.map(major => (
                                    <option key={major} value={major}>
                                        {major}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="input-box full-width">
                        <label>학년</label>
                        <select name="grade" value={formData.grade} onChange={handleChange}>
                            <option value="1">1학년</option>
                            <option value="2">2학년</option>
                            <option value="3">3학년</option>
                            <option value="4">4학년</option>
                        </select>
                    </div>

                    <button type="submit" className="signup-btn">가입하기</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;