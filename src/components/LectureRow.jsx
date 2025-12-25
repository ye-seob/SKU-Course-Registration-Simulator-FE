import React from 'react';
import useViewStore from "../store/viewStore.js";
import {addCart, getCart} from "../api/cart.js";
import {enrollLecture, getEnrollments} from "../api/enrollment.js";
import useCartStore from "../store/cartStore.js";

const LectureRow = ({ lecture }) => {
    const { mode } = useViewStore();

    const {setCartList} = useCartStore();

    const isCartMode = mode === "CART";
    const isEnrollMode = mode === "ENROLL";

    const handleClick = async () => {
        if (isCartMode) {
            if (window.confirm("선택한 과목을 담으시겠습니까?")) {
                try {
                    const response = await addCart(lecture.id);
                    setCartList(response);
                    setCartList( await  getCart());
                } catch (err) {
                    console.log(err)
                    alert("장바구니 추가 실패");
                }
            }
        }

        if (isEnrollMode){
            if(window.confirm("선택한 강의를 신청하시겠습니까?")){
                try {
                     await enrollLecture(lecture.id)

                    const enrollments = await getEnrollments();
                    setCartList(enrollments);
                } catch (err) {
                    console.log(err)
                }
            }
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

export default LectureRow;