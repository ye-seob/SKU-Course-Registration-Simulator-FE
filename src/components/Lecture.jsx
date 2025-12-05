import React from 'react';
import {useCart} from "../hooks/useCart.js";


const Lecture = ({lecture}) => {
    const { addCartMutation } = useCart();

    const handleAdd = () => {
        if (window.confirm("선택한 과목을 담으시겠습니까?")) {
            addCartMutation.mutate(lecture.id);
        }
    };

    return (
        <tr className="course-row">
            <td>
                <button className="cart-btn" onClick={handleAdd}>장바구니담기</button>
            </td>
            <td>{lecture.id}</td>
            <td className="text-left">{lecture.lectureName}</td>
            <td>{lecture.lectureCode}</td>
            <td>{lecture.classNumber}</td>
            <td>{lecture.type}</td>
            <td>{lecture.credit}</td>
            <td>{lecture.time}</td>
            <td>{lecture.enrollment}</td>
            <td>{lecture.capacity}</td>
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