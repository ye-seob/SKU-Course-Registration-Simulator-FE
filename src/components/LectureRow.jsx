import React from 'react';


const LectureRow = ({ lecture, actionLabel , onAction}) => {
    return (
        <tr className="course-row">
            <td>
                <button className="cart-btn" onClick={onAction}>
                    {actionLabel}
                </button>
            </td>

            <td>{lecture.id}</td>
            <td className="text-left">{lecture.lectureName}</td>
            <td>{lecture.lectureCode}</td>
            <td>{lecture.classNumber}</td>
            <td>{lecture.type}</td>
            <td>{lecture.credit.toFixed(2)}</td>
            <td>{lecture.time.toFixed(2)}</td>
            <td>{lecture.enrollment.toFixed(2)}</td>
            <td>{lecture.capacity.toFixed(2)}</td>
            <td>{lecture.professor}</td>
            <td>{lecture.evalMethod}</td>
            <td>{lecture.week}</td>
            <td>{lecture.rating}</td>
            <td className="text-left">{lecture.desc}</td>
            <td className="text-left">{lecture.schedule}</td>
            <td>{lecture.competency}</td>
        </tr>
    );
};

export default LectureRow;