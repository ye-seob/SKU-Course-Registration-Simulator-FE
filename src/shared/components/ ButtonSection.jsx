import React from 'react';
import CustomButton from './CustomButton.jsx';
import CustomDropdown from './CustomDropdown.jsx';
import {MAJOR, TYPE} from '../util/constant.js';

const imgUrl = "/image/plus.gif";
const ButtonSection = ({ user, onNavigate }) => {
    return (
        <div className="button-section">
            <div className="section__header">
                <img src={imgUrl} alt="plusIcon" className="section__icon"/>
                <span className="section__title">정규학기 수강</span>
            </div>

            <div className="button-section__group">
                <CustomButton
                    text="자학과 교과목"
                    onClick={() => onNavigate(user?.major, "")}
                />

                <CustomButton
                    text="공통 교양"
                    onClick={() => onNavigate(
                        "",
                        (user?.college === "미래융합학부1" || user?.college === "미래융합학부2")
                            ? "미융교선"
                            : "교선"
                    )}
                />

                <CustomDropdown
                    options={TYPE}
                    placeholder="---강좌 선택 ----"
                    onChange={(value) => onNavigate("", value)}
                />

                <CustomButton
                    text="장바구니"
                    onClick={() => onNavigate("", "", true)}
                />

                <CustomButton text="타학과 교과목" />

                <CustomDropdown
                    options={MAJOR.map(m => m.name)}
                    placeholder="-- 타학과 선택 --"
                    onChange={(value) => onNavigate(value, "")}
                />

                <CustomButton text="복수전공" onClick={() => alert("추후 업데이트")} />
                <CustomButton text="부전공" onClick={() => alert("추후 업데이트")} />
                <CustomButton text="융합전공" onClick={() => alert("추후 업데이트")} />
            </div>
        </div>
    );
};

export default ButtonSection;