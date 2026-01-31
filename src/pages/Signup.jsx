import React, {useState} from 'react';
import '../styles/signupPage.css';
import {MAJOR} from "../utils/constant.js";
import {signup} from "../api/signup.js";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';

const logoUrl = "/image/logo.gif";

const Signup = () => {
    const navigate = useNavigate();

    const [agree, setAgree] = useState(false);
    const [formData, setFormData] = useState({
        studentId: "",
        name: "",
        college: MAJOR[0].college,
        major: MAJOR[0].name,
        grade: "1"
    });



    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "college") {
            const firstMajor = MAJOR.find(m => m.college === value)?.name || "";
            setFormData(prev => ({
                ...prev,
                college: value,
                major: firstMajor
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    const filteredMajors = MAJOR.filter(m => m.college === formData.college);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!agree) {
                toast.error("약관 동의는 필수입니다.");
                return;
            }


            await signup(formData);
            navigate('/login');
            toast.success("회원가입 성공");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };


    return (<div className="signup-container">
            <div className="signup-card">
                <header className="signup-header">
                    <div className="header-nav">
                        <div className="back-arrow" onClick={() => window.history.back()}>
                            &lt;
                        </div>
                        <div className="signup-logo-area">
                            <img src={logoUrl} alt="서경대학교" className="logo-image"/>
                        </div>
                    </div>
                    <div className="section-header">

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
                                placeholder="학번을 입력하세요(숫자)"
                                value={formData.studentId}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>닉네임</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="닉네임을 입력하세요"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>


                    <div className="section-divider">정보</div>

                    {/* 단과대 선택 */}
                    <div className="input-box full-width">
                        <label>단과대</label>
                        <select name="college" value={formData.college} onChange={handleChange}>
                            {[...new Set(MAJOR.map(m => m.college))].map(college => (
                                <option key={college} value={college}>{college}</option>
                            ))}
                        </select>
                    </div>


                    <div className="input-box full-width">
                        <label>학과(주전공)</label>
                        <select name="major" value={formData.major} onChange={handleChange}>
                            {filteredMajors.map(m => (
                                <option key={m.name} value={m.name}>{m.name}</option>
                            ))}
                        </select>
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
                    <div className="terms-box">
                        <label className="terms-label">
                            <input
                                type="checkbox"
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                            />
                            <span>
            본 서비스는 <strong>모의 수강신청 시뮬레이션</strong>이며 실제 수강신청과 무관함을 이해하고 동의합니다. (필수)
        </span>
                        </label>
                    </div>
                    <button type="submit" className="signup-btn">가입하기</button>
                </form>
            </div>
        </div>);
};

export default Signup;