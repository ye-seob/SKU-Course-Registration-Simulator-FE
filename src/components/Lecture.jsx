import React from 'react';
import useViewStore from "../store/viewStore.js";
import {addCart} from "../api/cart.js";
import useCartStore from "../store/cartStore.js";

const Lecture = ({ lecture }) => {
    const { mode } = useViewStore();

    const {setCartList} = useCartStore();

    const isCartMode = mode === "CART";
    const isEnrollMode = mode === "ENROLL";

    const handleClick = async () => {
        if (isCartMode) {
            if (window.confirm("선택한 과목을 담으시겠습니까?")) {
                try {
                    await addCart(lecture.id, setCartList);
                } catch (err) {
                    console.log(err)
                    alert("장바구니 추가 실패");
                }
            }
        }

        if (isEnrollMode) {
            console.log("수강신청:", lecture.id);
        }
    };



    return (
        <tr className="course-row">
            <td>
                <button className="cart-btn" onClick={handleClick}>
                    {isCartMode ? "장바구니담기" : "신청"}
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

export default Lecture;