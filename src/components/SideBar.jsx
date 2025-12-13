import React, {useState} from 'react';
import UserInfo from './UserInfo.jsx';
import CustomButton from './CustomButton.jsx';
import CustomDropdown from './CustomDropdown.jsx';
import '../styles/SideBar.css';
import Search from "./Search.jsx";
import Logout from "./Logout.jsx";
import {MAJOR, TYPE} from "../utils/constant.js";
import useUserStore from "../store/userStore.js";
import useSearchStore from "../store/searchStore.js";


const SideBar = () => {
    const { user } = useUserStore();
    const { setMajor , setType} = useSearchStore();
    const major = user?.major;
    const [visibleDropdown, setVisibleDropdown] = useState('type');

    const doubleMajor = "경영학과";
    const minor = "전자컴퓨터공학과";

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
                    <CustomButton
                        text={"자학과 교과목"}
                        onClick={()=>{
                            setVisibleDropdown('type');
                            setMajor(major);
                            setType("");
                        }}
                    />

                    <CustomButton
                        text={"공통 교양"}
                        onClick={()=>{
                            setVisibleDropdown('type');
                            setMajor("");
                            setType("교선");
                        }}
                    />

                    {visibleDropdown === 'type' &&
                        <CustomDropdown
                            options={TYPE}
                            placeholder="---강좌 선택 ----"
                            onChange={(value)=>{
                                setMajor("");
                                setType(value);
                            }}
                        />
                    }



                    <CustomButton text={"장바구니"} onClick={() => alert(`장바구니 클릭`)}/>



                    <CustomButton
                        text={"타학과 교과목"}
                        onClick={()=>{
                            setVisibleDropdown('major');
                        }}
                    />

                    {visibleDropdown === 'major' &&
                        <CustomDropdown
                            options={MAJOR}
                            placeholder="-- 타학과 선택 --"
                            onChange={(value)=>{
                                setMajor(value);
                                setType("");
                            }}
                        />
                    }


                    <CustomButton text={"복수전공"} onClick={() =>{
                        setMajor(doubleMajor);
                        setType("")}
                    }
                    />

                    <CustomButton text={"부전공"} onClick={() => {
                        setMajor(minor);
                        setType("")}
                    }
                    />
                    <CustomButton text={"융합전공"} onClick={() => alert(`장바구니 클릭`)}/>

                </div>
            </div>

            <Search/>
            <Logout/>
        </div>
    );
};

export default SideBar;
