import React from 'react';
import UserInfo from "../components/UserInfo.jsx";
import CustomButton from "../components/CustomButton";

function handleButtonClick(test) {
    alert(test)
}

const Home = () => {
    return <>
        <UserInfo/>
        <div className="sidebar-menu">
            <h2 className="menu-header">정규학기 수강</h2>

            <CustomButton onClick={() => handleButtonClick('자학과 교과목')}>
                자학과 교과목
            </CustomButton>

            <CustomButton onClick={() => handleButtonClick('공통 교양')}>
                공통 교양
            </CustomButton>


            <CustomButton onClick={() => handleButtonClick('타학과 교과목')}>
                타학과 교과목
            </CustomButton>

            <CustomButton onClick={() => handleButtonClick('장바구니')}>
                장바구니
            </CustomButton>

            <CustomButton onClick={() => handleButtonClick('복수전공')}>
                복수전공
            </CustomButton>

            <CustomButton onClick={() => handleButtonClick('부전공')}>
                부전공
            </CustomButton>

            <CustomButton onClick={() => handleButtonClick('융합전공')}>
                융합전공
            </CustomButton>


        </div>
    </>;
};

export default Home;
