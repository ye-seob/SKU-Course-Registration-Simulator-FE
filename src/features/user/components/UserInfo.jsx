import React from 'react';
import '../styles/userInfo.css';
import useUserStore from '../store/userStore.js';

const userUrl = "/image/userIcon.jpg";

const UserInfo = () => {
    const userData = useUserStore((state) => state.user);

    const infoItems = [
        { label: '년 도', value: '2026년 1학기' },
        { label: '학 번', value: userData?.studentId || '정보 없음' },
        { label: '성 명', value: userData?.name || '정보 없음' },
        { label: '학 과', value: userData?.major || '정보 없음' },
        { label: '전 공', value: '공통전공' },
        { label: '학 년', value: userData?.grade || '정보 없음' },
        { label: '최소수강신청학점', value: 12 },
        { label: '최대수강신청학점', value: 19 },
    ];

    return (
        <div className="user-info">
            <div className="section__header">
                <img src={userUrl} alt="userIcon" className="section__icon"/>
                <span className="section__title">사용자정보</span>
            </div>

            <div className="user-info__list">
                {infoItems.map((item, index) => (
                    <div className="user-info__item" key={item.label}>
                        <span className="user-info__label">{item.label} :</span>
                        <span className="user-info__value">{item.value} </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserInfo;