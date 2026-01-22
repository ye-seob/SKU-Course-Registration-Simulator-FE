import React, {useEffect} from "react";
import "../styles/CartList.css";
import MyLectureRow from "./MyLectureRow.jsx";
import useViewStore from "../store/viewStore.js";
import useCartStore from "../store/cartStore.js";
import {deleteCart, getCart} from "../api/cart.js";
import {cancelEnrollment, getEnrollments} from "../api/enrollment.js";
import useEnrollmentStore from "../store/enrollmentStore.js";


const MyLectureList = () => {
    const { mode ,isWaiting} = useViewStore();
    const { cartList, setCartList } = useCartStore();
    const { enrollmentList,setEnrollmentList } = useEnrollmentStore();

    const MAX_ROWS = 10;

    const getModeConfig = () => {
        if (mode === 'CART') {
            return {
                title: "[장바구니담기]",
                desc: (
                    <>
                        ※ <span className="highlight-num">시간중복에 관계없이 최대 10개 과목</span>
                        까지 담을 수 있습니다.
                    </>
                ),

                fetchData: async () => {
                    const response = await getCart();
                    setCartList(response);
                },
                action: async (lectureId) => {
                    await deleteCart(lectureId);
                    const response = await getCart();
                    setCartList(response);
                },

                buttonLabel: "장바구니삭제",
                countText: (list) =>
                    `[ 담긴교과목수 : ${list.length}  총 학점 : ${list.length * 3} ]`,
                getList: () => cartList,
                getEmptyRows: () => MAX_ROWS - cartList.length,
            };
        }

        return {
            title: "[수강신청 취소]",
            desc: (
                <>
                    ※ 수강신청 취소할 교과목은
                    <span className="highlight-num"> 취소</span> 버튼을 클릭하세요.
                </>
            ),
            fetchData: async () => {
                const response = await getEnrollments();
                setEnrollmentList(response);
            },
            action: async (lectureId) => {
                await cancelEnrollment(lectureId);
                const response = await getEnrollments();
                setEnrollmentList(response);
            },
            buttonLabel: "취소",
            countText: (list) =>
                `[ 신청과목 수 : ${list.length}  신청학점 : ${list.reduce(
                    (sum, l) => sum + l.credit,
                    0
                )} ]`,
            getList: () => enrollmentList,
            getEmptyRows: () => MAX_ROWS - enrollmentList.length,
        };
    };

    const config =  getModeConfig();

    useEffect(() => {
        config.fetchData();
    }, [mode,isWaiting]);


    const emptyRows = config.getEmptyRows();
    const list = config.getList()
    const confirmMsg = "선택한 과목을 삭제하시겠습니까?"

    const handleAction = async (lectureId) => {
        if (window.confirm(confirmMsg)) {
            try {

                await config.action(lectureId);
            } catch (err) {
                console.error(err);
                alert("처리에 실패했습니다.");
            }
        }
    };
    return (
        <div className="cart-wrapper">
            <div className="cart-info-bar">
                <div className="cart-info-left">
                    <span className="info-title">{config.title}</span>
                    <span className="info-desc">{config.desc}</span>
                </div>
                <div className="cart-info-right">
                    {config.countText(list)}
                </div>
            </div>

            <div className="cart-table-container">
                <table className="cartList-table">
                    <colgroup>
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "250px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "65px" }} />
                        <col style={{ width: "65px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "120px" }} />
                        <col style={{ width: "150px" }} />
                        <col style={{ width: "60px" }} />
                    </colgroup>

                    <thead>
                    <tr>
                        <th className="col-btn">{config.buttonLabel}</th>
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
                    {list.map((lecture) => (
                        <MyLectureRow key={`${lecture.lectureId}-${lecture.addedAt}`} lecture={lecture} actionLabel={config.buttonLabel} onAction={() => handleAction(lecture.lectureId)} />
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

export default MyLectureList;