import React from "react";
import "../styles/waitingView.css";

const WaitingView = ({ aheadCount, behindCount }) => {
    // 예상 대기 시간 계산 (내 앞 인원 * 0.3초)
    const totalSeconds = Math.floor(aheadCount * 0.3);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h > 0 ? h + "시간 " : ""}${m > 0 ? m + "분 " : ""}${s}초`;
    };



    const totalPeople = aheadCount + behindCount;

    const progressPercentage =
        totalPeople === 0
            ? 0
            : ((totalPeople - aheadCount) / totalPeople) * 100;

    return (
        <div className="waiting-overlay">
            <div className="waiting-container">
                <h1 className="waiting-header">
                    <span className="text-black">서비스 </span>
                    <span className="text-blue">접속대기 중</span>
                    <span className="text-black">입니다.</span>
                </h1>

                <div className="waiting-time">
                    예상대기시간 :
                    <span className="waiting-time-value">{formatTime(totalSeconds)}</span>
                </div>

                <div className="waiting-progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${progressPercentage}%`,
                        }}
                    ></div>
                </div>

                <div className="waiting-info-box">
                    <div>
                        고객님 앞에 <span className="highlight-number">{aheadCount}</span> 명,
                        뒤에 <span className="highlight-number">{behindCount}</span> 명의 대기자가 있습니다.
                    </div>

                    <div className="waiting-info-text">
                        현재 접속 사용자가 많아 대기 중이며, 잠시만 기다리시면
                        <br />
                        서비스로 자동 접속 됩니다.
                    </div>

                    <div className="waiting-warning">
                        ※ 재 접속하시면 대기시간이 더 길어집니다. [중지]
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitingView;
