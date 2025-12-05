import React from "react";
import {useCart} from "../hooks/useCart.js";

const CartRow = ({item}) => {
    const { deleteCartMutation} = useCart();

    const handleDelete = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            deleteCartMutation.mutate(item.lectureId);
        }
    };

    return (
        <tr>
            <td>
                <button className="delete-btn" onClick={handleDelete}>장바구니삭제</button>
            </td>
            <td className="text-left">{item.lectureName}</td>
            <td>{item.lectureCode}</td>
            <td>{item.classNumber}</td>
            <td>{item.type}</td>
            <td>{item.credit}</td>
            <td>{item.time}</td>
            <td>{item.professor}</td>
            <td className="text-left">{item.desc}</td>
            <td className="text-left">{item.schedule}</td>
            <td>{item.note}</td>
        </tr>
    );
};

export default CartRow