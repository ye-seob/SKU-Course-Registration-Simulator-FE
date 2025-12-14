import React, {useEffect} from "react";
import "../styles/CartList.css";
import CartRow from "./CartRow.jsx";
import useViewStore from "../store/viewStore.js";
import useCartStore from "../store/cartStore.js";
import {getCart} from "../api/cart.js";

const dummyEnrollList = [
    {
        lectureId: 1,
        lectureName: "자료구조",
        lectureCode: "CS101",
        classNumber: "01",
        type: "전필",
        credit: 3,
        time: 3,
        professor: "홍길동",
        desc: "자료구조 기초 강의",
        schedule: "월 1-2",
        note: "",
        addedAt: Date.now(),
    },
    {
        lectureId: 2,
        lectureName: "운영체제",
        lectureCode: "CS102",
        classNumber: "01",
        type: "전필",
        credit: 3,
        time: 3,
        professor: "김철수",
        desc: "운영체제 기초 강의",
        schedule: "화 3-4",
        note: "",
        addedAt: Date.now(),
    },
];

const CartList = () => {
    const { mode } = useViewStore();
    const { cartList, setCartList } = useCartStore();

    const MAX_ROWS = 10;
    const isCartMode = mode === "CART";

    // 모드에 따라 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            if (isCartMode) {
                await getCart(setCartList);
            } else {
                setCartList(dummyEnrollList);
            }
        };
        fetchData();
    }, [isCartMode, setCartList]);

    const emptyRows = MAX_ROWS - cartList.length;

    const titleText = isCartMode ? "[장바구니담기]" : "[수강신청 취소]";
    const descText = isCartMode ? (
        <>
            ※ <span className="highlight-num">시간중복에 관계없이 최대 10개 과목</span>까지 담을 수 있습니다.
        </>
    ) : (
        <>
            ※ 수강신청 취소할 교과목은
            <span className="highlight-num"> 취소</span> 버튼을 클릭하세요.
        </>
    );

    return (
        <div className="cart-wrapper">
            <div className="cart-info-bar">
                <div className="cart-info-left">
                    <span className="info-title">{titleText}</span>
                    <span className="info-desc">{descText}</span>
                </div>
                <div className="cart-info-right">
                    {isCartMode ? (
                        <span>
                            [ 담긴교과목수 : {cartList.length} &nbsp; 총 학점 : {cartList.length * 3} ]
                        </span>
                    ) : (
                        <span>
                            [ 신청과목 수 : {cartList.length} &nbsp; 신청학점 : {cartList.reduce((sum, l) => sum + l.credit, 0)} ]
                        </span>
                    )}
                </div>
            </div>

            <div className="cart-table-container">
                <table className="cartList-table">
                    <colgroup>
                        <col style={{ width: "140px" }} />
                        <col style={{ width: "250px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "65px" }} />
                        <col style={{ width: "65px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "120px" }} />
                        <col style={{ width: "150px" }} />
                        <col style={{ width: "auto" }} />
                    </colgroup>

                    <thead>
                    <tr>
                        <th className="col-btn">{isCartMode ? "장바구니삭제" : "취소"}</th>
                        <th>교과목명</th>
                        <th>학수번호</th>
                        <th>분반</th>
                        <th>이수<br />구분</th>
                        <th>학<br />점</th>
                        <th>시<br />간</th>
                        <th>담당교수</th>
                        <th>강의설명</th>
                        <th>강의시간</th>
                        <th>비고</th>
                    </tr>
                    </thead>

                    <tbody>
                    {cartList.map((item) => (
                        <CartRow key={`${item.lectureId}-${item.addedAt}`} item={item} mode={mode} />
                    ))}

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