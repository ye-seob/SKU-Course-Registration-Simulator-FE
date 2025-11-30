import React from 'react';
import '../styles/userInfo.css';

const UserInfo = () => {
    const userData = {
        semester: '2026년 1학기',
        studentId: '2023216049',
        name: '변예섭',
        major: '소프트웨어학과',
        track: '공통전공',
        grade: '3학년',
        minCredits: '12',
        maxCredits: '19',
    };

    const infoItems = [
        { label: '년 도', value: userData.semester },
        { label: '학 번', value: userData.studentId },
        { label: '성 명', value: userData.name },
        { label: '학 과', value: userData.major },
        { label: '전 공', value: userData.track },
        { label: '학 년', value: userData.grade },
        { label: '최소수강신청학점', value: userData.minCredits },
        { label: '최대수강신청학점', value: userData.maxCredits },
    ];

    return (
        <div className="user-info-container">
            {/* 상단 사용자 정보 제목/헤더 영역 */}
            <div className="user-info-header">
                <span className="user-icon">
                    🧑‍💻
                </span>
                <span className="user-title">
                    사용자정보
                </span>
            </div>

            {/* 정보 항목 목록 영역 */}
            <div className="user-details-list">
                {infoItems.map((item, index) => (
                    // 개별 정보 항목 (예: 년 도 : 2024년 2학기)
                    <div className="detail-item" key={index}>
                        {/* 왼쪽 레이블 (예: 년 도) */}
                        <span className="detail-label">
                            {item.label} :
                        </span>
                        {/* 오른쪽 값 (예: 2026년 1학기) */}
                        <span className="detail-value">
                            {item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserInfo;
