import {useEffect, useState} from 'react';
import useCountUp from '../hooks/useCountUp.js';
import "../styles/Statssection.css"

const StatCard = ({ icon, label, target, unit, animationDelay }) => {
    const count = useCountUp(target, 1600, animationDelay);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), animationDelay);
        return () => clearTimeout(timer);
    }, [animationDelay]);

    return (
        <div className={`stat-card ${isVisible ? 'stat-card--visible' : ''}`}>
            <div className={`stat-card__icon`}>
                {icon}
            </div>
            <div className="stat-card__content">
                <p className="stat-card__label">{label}</p>
                <div className="stat-card__value">
                    <span className="stat-card__number">{count.toLocaleString()}</span>
                    <span className="stat-card__unit">{unit}</span>
                </div>
            </div>
        </div>
    );
};

// stats prop: { studentCount, totalAttempts, minutesUntilNext }
const StatsSection = ({ stats }) => {
    const items = [
        {
            icon:           '👥',
            label:          '이용한 학생 수',
            target:         stats.studentCount,
            unit:           '명',
            animationDelay: 200,
        },
        {
            icon:           '📋',
            label:          '총 수강신청 시도',
            target:         stats.totalAttempts,
            unit:           '회',
            animationDelay: 350,
        },
        {
            icon:           '⏱️',
            label:          '다음 수강신청까지',
            target:         stats.minutesUntilNext,
            unit:           '분 남음',
            animationDelay: 500,
        },
    ];

    return (
        <div className="stats-section">
            <p className="stats-section__title">지금 현황</p>
            <div className="stats-section__list">
                {items.map((item) => (
                    <StatCard key={item.label} {...item} />
                ))}
            </div>
        </div>
    );
};

export default StatsSection;