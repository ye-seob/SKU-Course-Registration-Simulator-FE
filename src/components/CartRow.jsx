import React from "react";
import useViewStore from "../store/viewStore.js";
import {cancelEnrollment, getEnrollments} from "../api/enrollment.js";
import useCartStore from "../store/cartStore.js";
import {deleteCart, getCart} from "../api/cart.js";

const CartRow = ({ item }) => {
    const { mode } = useViewStore();
    const {  setCartList } = useCartStore();
    const isCartMode = mode === "CART";
    const isEnrollMode = mode === "ENROLL";

    const handleClick = async () => {
        if (isCartMode) {
            if (window.confirm("장바구니에서 삭제하시겠습니까?")) {
                await deleteCart(item.lectureId);

                const carts = getCart();

                setCartList(carts)
            }
        }

        if (isEnrollMode) {
            if (window.confirm("수강신청을 취소하시겠습니까?")) {
                try {
                    await cancelEnrollment(item.lectureId);
                    const enrollments = await getEnrollments();
                    setCartList(enrollments);
                }catch (err){
                    console.error("[CartRow] 수강신청 취소 실패", err);
                    alert("수강신청 취소에 실패했습니다.");
                }
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