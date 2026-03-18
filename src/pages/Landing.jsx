import {useEffect, useState} from 'react';
import StatsSection from "../features/landing/components/Statssection.jsx";
import ActionButtons from "../features/landing/components/ActionButtons.jsx";
import "../features/landing/styles/Landing.css";

const STATS = {
    studentCount: 169,
    totalAttempts: 1302,
    minutesUntilNext: 17,
};

const MainPage = () => {
    const [isIntroVisible, setIsIntroVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsIntroVisible(true), 80);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="landing">
            <div className="landing__wrapper">

                <header className={`landing__intro ${isIntroVisible ? 'landing__intro--visible' : ''}`}>
                    <h1 className="landing__title">
                        서경대학교 <br/>모의 수강신청
                    </h1>

                    <p className="landing__description">
                        실전처럼 연습하고, 원하는 강의를 놓치지 마세요
                    </p>
                </header>

                <StatsSection stats={STATS} />

                <ActionButtons/>

            </div>

            <footer className="landing__footer">
                © 2026 서경대학교 모의 수강신청 서비스
            </footer>
        </div>
    );
};

export default MainPage;