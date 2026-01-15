import React, {useState} from 'react';
import {rateLecture} from '../api/lecture.js';
import {toast} from "react-toastify";

const LectureRow = ({ lecture, actionLabel, onAction }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRatingClick = async (score) => {
        try {
            await rateLecture(lecture.lectureId, score);
            toast.success(`${score}점이 등록되었습니다.`);
            setIsModalOpen(false);
        } catch (error) {
            toast.error("평점 등록 실패")
            setIsModalOpen(false);
        }
    };

    let schedule = "";
    try {
        const scheduleObj = typeof lecture.schedule === "string"
            ? JSON.parse(lecture.schedule)
            : lecture.schedule;

        if (scheduleObj && typeof scheduleObj === "object") {
            schedule = Object.entries(scheduleObj)
                .map(([day, times]) => `${day}: ${Array.isArray(times) ? times.join(", ") : times}`)
                .join(" / ");
        }
    } catch (e) {
        schedule = lecture.schedule || "";
    }

    return (
        <>
            <tr className="course-row">
                <td>
                    <button className="cart-btn" onClick={onAction}>
                        {actionLabel}
                    </button>
                </td>
                <td>{lecture.lectureId}</td>
                <td className="text-left">{lecture.lectureName}</td>
                <td>{lecture.lectureCode}</td>
                <td>{lecture.classNumber}</td>
                <td>{lecture.type}</td>
                <td>{lecture.credit.toFixed(2)}</td>
                <td>{lecture.time.toFixed(2)}</td>
                <td>{lecture.enrollment.toFixed(2)}</td>
                <td>{lecture.capacity.toFixed(2)}</td>
                <td>{lecture.professor}</td>
                <td>{lecture.gradingMethod}</td>
                <td>{lecture.week}</td>

                <td
                    className="rating-cell"
                    onClick={() => setIsModalOpen(true)}
                    style={{ cursor: 'pointer'}}
                >
                    {lecture.rating.toFixed(1)}
                </td>

                <td className="text-left">{lecture.room}</td>
                <td className="text-left">{schedule}</td>
                <td>{lecture.competency}</td>
            </tr>

            {/* 모달 */}
            {isModalOpen && (
                <div className="rating-modal-backdrop" onClick={() => setIsModalOpen(false)}>
                    <div
                        className="rating-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="rating-modal-header">
                            <h3 >{lecture.lectureName}</h3>
                            <p>이 강의에 대한 만족도를 선택해주세요.</p>

                        </div>
                        <div className="rating-button-group">
                            {[1, 2, 3, 4, 5].map((score) => (
                                <button
                                    key={score}
                                    className="rating-score-btn"
                                    onClick={() => handleRatingClick(score)}
                                >
                                    {score}
                                </button>
                            ))}
                        </div>
                        <button className="rating-close-btn" onClick={() => setIsModalOpen(false)}>
                            취소
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default LectureRow;