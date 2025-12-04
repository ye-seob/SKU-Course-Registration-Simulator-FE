import React from 'react';
import UserInfo from './UserInfo.jsx';
import CustomButton from './CustomButton.jsx';
import CustomDropdown from './CustomDropdown.jsx';
import '../styles/SideBar.css';
import Search from "./Search.jsx";
import Logout from "./Logout.jsx";

const buttonLabel = [
    '자학과 교과목',
    '공통 교양',
    '타학과 교과목',
    '장바구니',
    '복수전공',
    '부전공',
    '융합전공',
];

const SideBar = () => {


    return (
        <div className="side-bar-container">
            <div className="logo-area">
                <img src="https://s.skuniv.ac.kr/course/img/sugang/logo2.gif" alt="서경대학교 로고" className="logo-image" />
            </div>

            <UserInfo />

            <div className="button-section">
                <div className="section-header">
                    <span className="plus-icon">
                        ➕
                    </span>
                    <span className="section-title">
                        정규학기 수강
                    </span>
                </div>

                <div className="button-group">
                    {buttonLabel.slice(0, 2).map(text => (
                        <CustomButton key={text}  onClick={() => alert(`${text} 클릭`)}>
                            {text}
                        </CustomButton>
                    ))}

                    <CustomDropdown
                        options={['전핵','전선','교핵']}
                        placeholder="교선"
                    />

                    <CustomButton onClick={() => alert(`장바구니 클릭`)}>
                        장바구니
                    </CustomButton>

                    <CustomDropdown
                        options={['소프트웨어학과', '전자컴퓨터공학과']}
                        placeholder="-- 타학과 선택 --"
                    />


                    {buttonLabel.slice(4).map(text => (
                        <CustomButton key={text} onClick={() => alert(`${text} 클릭`)}>
                            {text}
                        </CustomButton>
                    ))}
                </div>
            </div>

            <Search/>
            <Logout/>
        </div>
    );
};

export default SideBar;
