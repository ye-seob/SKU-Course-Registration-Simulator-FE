import React from "react";
import "../styles/WarningNotice.css"

const WarningNotice = () => (
    <div className="course-warning-wrapper">
        <div className="warning-title-box">
            <p>[대체 재수강 유의사항]</p>
        </div>
        <div className="warningInfo-text">
            <p>예시문장 예시문장 예시문장 예시문장 예시문장 예시문장 예시문장 </p>
            <br/>
            <p>예시문장 예시문장 예시문장 예시문장 예시문장 예시문장 예시문장 </p>
            <br/>
            <p>예시문장 예시문장 예시문장</p>
        </div>
    </div>
);

export default WarningNotice;