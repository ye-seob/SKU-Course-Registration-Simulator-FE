import React from 'react';

const Lecture = ({ lecture }) => {
        return (
            <tr className="course-row">
                    <td>
                            <button className="cart-btn">장바구니담기</button>
                    </td>
                    <td>{lecture.id}</td>
                    <td className="text-left">{lecture.name}</td>
                    <td>{lecture.courseId}</td>
                    <td>{lecture.section}</td>
                    <td>{lecture.type}</td>
                    <td>{lecture.credit}</td>
                    <td>{lecture.time}</td>
                    <td>{lecture.enrolled}</td>
                    <td>{lecture.limit}</td>
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

export default Lecture;