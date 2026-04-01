import {formatSchedule} from '../../utils/formatSchedule.js';

const MyLectureRow = ({ lecture, actionLabel, onAction }) => {
    const schedule = formatSchedule(lecture.schedule);

    return (
        <tr>
            <td>
                <button className="delete-btn" onClick={onAction}>
                    {actionLabel}
                </button>
            </td>
            <td className="text-left">{lecture.lectureName}</td>
            <td>{lecture.lectureCode}</td>
            <td>0{lecture.classNumber}</td>
            <td>{lecture.type}</td>
            <td>{lecture.credit.toFixed(2)}</td>
            <td>{lecture.time.toFixed(2)}</td>
            <td>{lecture.professor}</td>
            <td className="text-left">{lecture.room}</td>
            <td className="text-left">{schedule}</td>
            <td>{lecture.note}</td>
        </tr>
    );
};

export default MyLectureRow;