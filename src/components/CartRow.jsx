import React from "react";
import useViewStore from "../store/viewStore.js";

const CartRow = ({ item }) => {
    const { mode } = useViewStore();

    const isCartMode = mode === "CART";
    const isEnrollMode = mode === "ENROLL";

    const handleClick = () => {
        if (isCartMode) {
            if (window.confirm("장바구니에서 삭제하시겠습니까?")) {
                // 🔥 장바구니 삭제 로직은 추후 zustand/cartStore나 API로 연결
                console.log("장바구니 삭제:", item.lectureId);
            }
        }

        if (isEnrollMode) {
            if (window.confirm("수강신청을 취소하시겠습니까?")) {
                // 🔥 수강신청 취소 로직 연결
                console.log("수강신청 취소:", item.lectureId);
            }
        }
    };

    return (
        <tr>
            <td>
                <button className="delete-btn" onClick={handleClick}>
                    {isCartMode ? "장바구니삭제" : "취소"}
                </button>
            </td>

            <td className="text-left">{item.lectureName}</td>
            <td>{item.lectureCode}</td>
            <td>{item.classNumber}</td>
            <td>{item.type}</td>
            <td>{item.credit.toFixed(2)}</td>
            <td>{item.time.toFixed(2)}</td>
            <td>{item.professor}</td>
            <td className="text-left">{item.desc}</td>
            <td className="text-left">{item.schedule}</td>
            <td>{item.note}</td>
        </tr>
    );
};

export default CartRow;