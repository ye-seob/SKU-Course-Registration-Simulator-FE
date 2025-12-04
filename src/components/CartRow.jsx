import React from "react";

const CartRow = ({ item }) => {
    return (
        <tr>
            <td>
                <button className="delete-btn">장바구니삭제</button>
            </td>
            <td className="text-left">{item.name}</td>
            <td>{item.courseId}</td>
            <td>{item.section}</td>
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

export default  CartRow