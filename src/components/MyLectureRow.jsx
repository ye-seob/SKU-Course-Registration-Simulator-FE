import React from "react";

const MyLectureRow = ({ lecture , actionLabel , onAction }) => {

    return (
        <tr>
            <td>
                <button className="delete-btn" onClick={onAction}>
                    {actionLabel}
                </button>
            </td>

            <td className="text-left">{lecture.lectureName}</td>
            <td>{lecture.lectureCode}</td>
            <td>{lecture.classNumber}</td>
            <td>{lecture.type}</td>
            <td>{lecture.credit.toFixed(2)}</td>
            <td>{lecture.time.toFixed(2)}</td>
            <td>{lecture.professor}</td>
            <td className="text-left">{lecture.desc}</td>
            <td className="text-left">{lecture.schedule}</td>
            <td>{lecture.note}</td>
        </tr>
    );
};

export default MyLectureRow;