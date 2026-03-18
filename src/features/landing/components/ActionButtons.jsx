import {useEffect, useState} from 'react';
import "../styles/ActionButtons.css"
import useViewStore from "../../view/store/viewStore.js";
import {useNavigate} from "react-router-dom";

const ACTION_LIST = [
    {
        id: 'ENROLL',
        label: '수강신청 하러가기',
        icon: '→',
        description: '매 정각마다 실제와 동일한 수강신청 환경을 제공합니다',
        animationDelay: 650,
    },
    {
        id: 'CART',
        label: '장바구니 담기',
        icon: '🛒',
        description: '원하는 강의를 장바구니에 미리 담아둘 수 있습니다',
        animationDelay: 760,
    },
    {
        id: 'PRACTICE',
        label: '연습 해보기',
        icon: '🎯',
        description: '시간에 상관없이 언제든 수강신청을 이용할 수 있습니다',
        animationDelay: 870,
    },
];

const ActionButton = ({ id, label, icon, description, animationDelay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const setMode = useViewStore((state) => state.setMode);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), animationDelay);
        return () => clearTimeout(timer);
    }, [animationDelay]);

    const handleClick = () => {
        setMode(id);
        navigate('/login');
    };


    return (
        <button className={`action-button ${isVisible ? 'action-button--visible' : ''}`} onClick={handleClick}>
            <div className="action-button__content">
                <span className="action-button__icon">{icon}</span>
                <div className="action-button__info">
                    <p className="action-button__label">{label}</p>
                    <p className="action-button__description">{description}</p>
                </div>
            </div>
            <span className="action-button__arrow">›</span>
        </button>
    );
};

const ActionButtons = () => (
    <div className="action">
        <p className="action__title">무엇을 할까요?</p>
        <div className="action__list">
            {ACTION_LIST.map((action) => (
                <ActionButton key={action.id} {...action}/>
            ))}
        </div>
    </div>
);

export default ActionButtons;