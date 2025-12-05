import React from "react";
import "../styles/CartList.css";
import CartRow from "./CartRow.jsx";
import {useCart} from "../hooks/useCart.js";

const CartList = () => {
    const { cartQuery } = useCart();
    const cartData = cartQuery.data || [];
    const MAX_ROWS = 10;
    const emptyRows = MAX_ROWS - cartData.length;

    return (
        <div className="cart-wrapper">
            <div className="cart-info-bar">
                <div className="cart-info-left">
                    <span className="info-title">[장바구니담기]</span>
                    <span className="info-desc">
                        ※ <span className="highlight-num">시간중복에 관계없이 최대 10개 과목</span>까지 담을 수 있습니다.
                    </span>
                </div>

                <div className="cart-info-right">
                    <span>
                        [ 담긴교과목수 : {cartData.length} &nbsp; 장바구니학점 : {cartData.length * 3} ]
                    </span>
                </div>
            </div>

            <div className="cart-table-container">
                <table className="cartList-table">
                    <colgroup>
                        <col style={{ width: "140px" }} />  {/* 장바구니삭제 */}
                        <col style={{ width: "250px" }} /> {/* 교과목명 (가장 넒음) */}
                        <col style={{ width: "100px" }} /> {/* 학수번호 */}
                        <col style={{ width: "65px" }} />  {/* 분반 */}
                        <col style={{ width: "65px" }} />  {/* 이수구분 */}
                        <col style={{ width: "50px" }} />  {/* 학점 */}
                        <col style={{ width: "50px" }} />  {/* 시간 */}
                        <col style={{ width: "100px" }} /> {/* 담당교수 */}
                        <col style={{ width: "120px" }} /> {/* 강의설명 */}
                        <col style={{ width: "150px" }} /> {/* 강의시간 */}
                        <col style={{ width: "auto" }} />  {/* 비고 (남은 공간 다 씀) */}
                    </colgroup>

                    <thead>
                    <tr>
                        <th className="col-btn">장바구니삭제</th>
                        <th className="col-subject">교과목명</th>
                        <th className="col-code">학수번호</th>
                        <th className="col-class">분반</th>
                        <th className="col-type">이수<br/>구분</th>
                        <th className="col-credit">학<br/>점</th>
                        <th className="col-time">시<br/>간</th>
                        <th className="col-prof">담당교수</th>
                        <th className="col-desc">강의설명</th>
                        <th className="col-schedule">강의시간<br />(주)주간,(야)야간</th>
                        <th className="col-note">비고</th>
                    </tr>
                    </thead>

                    <tbody>
                    {/* 1. 실제 데이터 렌더링 */}
                    {cartData.map((item) => (
                        <CartRow
                            key={`${item.lectureId}-${item.addedAt}`}
                            item={item}
                        />
                    ))}

                    {/* 2. 빈 행 렌더링 */}
                    {/* 데이터가 없어도, height: 35px가 CSS에 먹혀있으므로
                           데이터가 있을 때와 똑같은 높이의 빈 줄이 생성됩니다.
                        */}
                    {Array.from({ length: Math.max(0, emptyRows) }).map((_, i) => (
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
