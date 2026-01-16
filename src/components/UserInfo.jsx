import React from 'react';
import '../styles/userInfo.css';
import useUserStore from '../store/userStore';

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
        <div className="user-info-container">
            <div className="user-info-header">
                <span className="user-icon">🧑‍💻</span>
                <span className="user-title">사용자정보</span>
            </div>

            <div className="user-details-list">
                {infoItems.map((item, index) => (
                    <div className="detail-item" key={index}>
                        <span className="detail-label">{item.label} :</span>
                        <span className="detail-value">{item.value} </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserInfo;