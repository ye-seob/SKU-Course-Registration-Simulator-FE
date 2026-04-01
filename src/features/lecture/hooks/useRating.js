import {useEffect, useState} from 'react';
import {rateLecture} from '../api/lecture';
import {toast} from 'react-toastify';

const STORAGE_KEY = 'ratingTooltip';

export const useRating = (lectureId, index) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        if (index === 0 && !localStorage.getItem(STORAGE_KEY)) {
            setShowHint(true);
        }
    }, [index]);

    const hideHint = () => {
        localStorage.setItem(STORAGE_KEY, 'true');
        setShowHint(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
        hideHint();
    };

    const closeModal = () => setIsModalOpen(false);

    const handleRatingClick = async (score) => {
        try {
            await rateLecture(lectureId, score);
            toast.success(`${score}점이 등록되었습니다.`);
        } catch {
            toast.error('평점 등록 실패');
        } finally {
            closeModal();
            hideHint();
        }
    };

    return { isModalOpen, showHint, openModal, closeModal, handleRatingClick };
};