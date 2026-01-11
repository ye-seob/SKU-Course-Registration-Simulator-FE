import React from 'react';

const LectureRow = ({ lecture, actionLabel, onAction }) => {
    console.log(lecture)
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
        // 파싱 실패 시 원래 문자열 그대로
        schedule = lecture.schedule || "";
    }

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
            <td>{lecture.gradingMethod}</td>
            <td>{lecture.week}</td>
            <td>{lecture.rating.toFixed(1)}</td>
            <td className="text-left">{lecture.room}</td>
            <td className="text-left">{schedule}</td>
            <td>{lecture.competency}</td>
        </tr>
    );
};

export default LectureRow;