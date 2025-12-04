import React from "react";
import "../styles/CartList.css";
import CartRow from "./CartRow.jsx";

const CartList = () => {
    const MAX_ROWS = 10;

    const cartData = [
        {
            id: 1,
            name: "머신러닝",
            courseId: "CS1404",
            section: "01",
            type: "전심",
            credit: "3.0",
            time: "3.0",
            professor: "강문수",
            desc: "(복-620)-시스템소프트웨어실습실",
            schedule: "(주) 월 : 23, 24",
            note: ""
        },
        {
            id: 2,
            name: "소프트웨어공학",
            courseId: "CS1065",
            section: "01",
            type: "전핵",
            credit: "3.0",
            time: "3.0",
            professor: "노장규",
            desc: "(복-620)-시스템소프트웨어실습실",
            schedule: "(주) 수 : 23, 24",
            note: ""
        },
        {
            id: 3,
            name: "영상처리프로그래밍",
            courseId: "CS1308",
            section: "01",
            type: "전심",
            credit: "3.0",
            time: "3.0",
            professor: "강문수",
            desc: "(복-620)-시스템소프트웨어실습실",
            schedule: "(주) 수 : 21, 22",
            note: ""
        },
        {
            id: 4,
            name: "더빙으로배우는영어",
            courseId: "GE1881",
            section: "01",
            type: "교선",
            credit: "3.0",
            time: "3.0",
            professor: "박부남",
            desc: "(혜-504)-강의실",
            schedule: "(주) 수 : 25, 26",
            note: ""
        },
        {
            id: 5,
            name: "미술로보는심리학",
            courseId: "GE1864",
            section: "01",
            type: "교선",
            credit: "3.0",
            time: "3.0",
            professor: "이시종",
            desc: "(혜-401)-강의실",
            schedule: "(주) 수 : 25, 26",
            note: ""
        }
    ];

    const emptyRows = MAX_ROWS - cartData.length;

    return (
        <div className="cart-wrapper">
            <div className="cart-info-bar">
                <div className="cart-info-left">
                    <span className="info-title">[장바구니담기]</span>
                    <span className="info-desc">
                        ※{" "}
                        <span className="highlight-num">
                            시간중복에 관계없이 최대 10개 과목
                        </span>
                        까지 담을 수 있습니다.
                    </span>
                </div>

                <div className="cart-info-right">
                    <span>
                        [ 담긴교과목수 : {cartData.length} &nbsp; 장바구니학점 :{" "}
                        {cartData.length * 3} ]
                    </span>
                </div>
            </div>

            <div className="cart-table-container">
                <table className="cartList-table">
                    <thead>
                    <tr>
                        <th className="col-btn">장바구니삭제</th>
                        <th className="col-subject">교과목명</th>
                        <th className="col-code">학수번호</th>
                        <th className="col-class">분반</th>
                        <th className="col-type">
                            이수<br/>구분
                        </th>
                        <th className="col-credit">학<br/>점</th>
                        <th className="col-time">시간</th>
                        <th className="col-prof">담당교수</th>
                        <th className="col-desc">강의설명</th>
                        <th className="col-schedule">
                            강의시간
                            <br />
                            (주)주간,(야)야간
                        </th>
                        <th className="col-note">비고</th>
                    </tr>
                    </thead>

                    <tbody>
                    {cartData.map((item) => (
                        <CartRow key={item.id} item={item} />
                    ))}

                    {Array.from({ length: emptyRows }).map((_, i) => (
                        <tr key={`empty-${i}`} className="empty-row">
                            {Array.from({ length: 11 }).map((__, idx) => (
                                <td key={idx}>&nbsp;</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartList;