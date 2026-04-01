import {useRating} from '../../hooks/useRating.js';
import {formatSchedule} from '../../utils/formatSchedule.js';
import RatingModal from '../RatingModal.jsx';

const LectureRow = ({ lecture, actionLabel, onAction, index }) => {
    const { isModalOpen, showHint, openModal, closeModal, handleRatingClick } =
        useRating(lecture.lectureId, index);

    const schedule = formatSchedule(lecture.schedule);

    return (
        <>
            <tr className="lecture-row">
                <td>
                    <button className="lecture-row__action-btn" onClick={onAction}>
                        {actionLabel}
                    </button>
                </td>
                <td>{index + 1}</td>
                <td className="lecture-row__text--left">{lecture.lectureName}</td>
                <td>{lecture.lectureCode}</td>
                <td>0{lecture.classNumber}</td>
                <td>{lecture.type}</td>
                <td>{lecture.credit.toFixed(2)}</td>
                <td>{lecture.time.toFixed(2)}</td>
                <td>{lecture.enrollment.toFixed(2)}</td>
                <td>{lecture.capacity.toFixed(2)}</td>
                <td>{lecture.professor}</td>
                <td>{lecture.gradingMethod}</td>
                <td>{lecture.week}</td>
                <td className="lecture-row__rating" onClick={openModal}>
                    {lecture.rating.toFixed(1)}
                    {index === 0 && showHint && (
                        <div className="rating-tooltip">
                            여기를 클릭해서<br />평점을 등록해보세요
                        </div>
                    )}
                </td>
                <td className="text-left">{lecture.room}</td>
                <td className="text-left">{schedule}</td>
                <td>{lecture.competency}</td>
            </tr>

            {isModalOpen && (
                <RatingModal
                    lectureName={lecture.lectureName}
                    onRate={handleRatingClick}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default LectureRow;