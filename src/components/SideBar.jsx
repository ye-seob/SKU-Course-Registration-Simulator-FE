import React from 'react';
import UserInfo from './UserInfo.jsx';
import CustomButton from './CustomButton.jsx';
import CustomDropdown from './CustomDropdown.jsx';
import '../styles/SideBar.css';
import Search from "./Search.jsx";
import Logout from "./Logout.jsx";
import {MAJOR, TYPE} from "../utils/constant.js";
import useUserStore from "../store/userStore.js";
import useSearchStore from "../store/searchStore.js";
import useViewStore from "../store/viewStore.js";
import useLectureStore from "../store/lectureStore.js";
import {getLectures} from "../api/getLectures.js";
import {getCart} from "../api/cart.js";

const SideBar = () => {
    const { user } = useUserStore();
    const { setMajor, setType, setIsCart} = useSearchStore();
    const { mode, setMode } = useViewStore();
    const { setLectures } = useLectureStore();

    const doubleMajor = "경영학과";
    const minor = "전자컴퓨터공학과";

    const ToEnroll = () => {
        if (mode === "HOME") {
            setMode("ENROLL");
        }
    };


    const handleClick = async (newMajor, newType, cart = false) => {
        ToEnroll();
        setMajor(newMajor);
        setType(newType);
        setIsCart(cart);
        let num = 0;
        try {
            if (cart) {
                console.log(num++)
                 const response = await getCart();
                console.log(response)
                 setLectures(response);
            } else {

                await getLectures("", newMajor, newType, setLectures);
            }
        } catch (err) {
            console.error("데이터 조회 실패", err);
            setLectures([]);
        }
        }

        return (
        <div className="side-bar-container">
            <div className="logo-area">
                <img
                    src="https://s.skuniv.ac.kr/course/img/sugang/logo2.gif"
                    alt="서경대학교 로고"
                    className="logo-image"
                />
            </div>

            <UserInfo />

            <div className="button-section">
                <div className="section-header">
                    <span className="plus-icon">➕</span>
                    <span className="section-title">정규학기 수강</span>
                </div>

                <div className="button-group">
                    <CustomButton
                        text="자학과 교과목"
                        onClick={() => handleClick(user?.major, "")}
                    />

                    <CustomButton
                        text="공통 교양"
                        onClick={() => handleClick("", "교선")}
                    />

                    <CustomDropdown
                        options={TYPE}
                        placeholder="---강좌 선택 ----"
                        onChange={(value) => handleClick("", value)}
                    />

                    <CustomButton
                        text="장바구니"
                        onClick={() => handleClick("", "",true)}
                    />

                    <CustomButton text="타학과 교과목" />

                    <CustomDropdown
                        options={MAJOR}
                        placeholder="-- 타학과 선택 --"
                        onChange={(value) => handleClick(value, "")}
                    />

                    <CustomButton
                        text="복수전공"
                        onClick={() => handleClick(doubleMajor, "")}
                    />

                    <CustomButton
                        text="부전공"
                        onClick={() => handleClick(minor, "")}
                    />

                    <CustomButton
                        text="융합전공"
                        onClick={() => handleClick("", "")}
                    />
                </div>
            </div>

            <Search />
            <Logout />
        </div>
    );
};

export default SideBar;