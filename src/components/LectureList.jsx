import React, {useEffect} from "react";
import "../styles/LectureList.css";
import LectureRow from "./LectureRow.jsx";
import WaitingView from "./WaitingView.jsx";

import useViewStore from "../store/viewStore.js";
import useLectureStore from "../store/lectureStore.js";
import useSearchStore from "../store/searchStore.js";
import useCartStore from "../store/cartStore.js";

import {getLectures} from "../api/getLectures.js";
import {addCart, getCart} from "../api/cart.js";
import useQueueSocket from "../utils/useQueueSocket.js";

const LectureList = () => {
    const { mode, isWaiting, setWaiting } = useViewStore();
    const { lectures, setLectures } = useLectureStore();
    const { setCartList } = useCartStore();
    const { major, type, keyword, isCart } = useSearchStore();
    const { connectQueue, rankData } = useQueueSocket();

    useEffect(() => {
        const fetchData = async () => {
            if (isCart) {
                const data = await getCart();
                setLectures(data);
            } else {
                const data = await getLectures(keyword, major, type);

                setLectures(data);
            }
        };
        fetchData();
    }, [isCart, major, type, keyword, setLectures,isWaiting]);


    const getModeConfig = () => {
        if (mode === "CART") {
            return {
                label: "장바구니담기",
                confirmMsg: "선택한 과목을 장바구니에 담으시겠습니까?",
                action: async (lectureId) => {
                    await addCart(lectureId);
                    const updatedCart = await getCart();
                    setCartList(updatedCart);
                },
            };
        }

        return {
            label: "신청",
            confirmMsg: "선택한 강의를 신청하시겠습니까?",
            action: async (lectureId) => {
                    connectQueue(lectureId);
                },
        };
    };

    const config = getModeConfig();

    const handleAction = async (lectureId) => {
        if (!window.confirm(config.confirmMsg)) return;

        try {
            await config.action(lectureId);
        } catch (err) {
            alert(err.message)
            setWaiting(false);
        }
    };

    return (
        <div className="lecture-wrapper" style={{ position: "relative" }}>
            {isWaiting && (
                <WaitingView
                    aheadCount={rankData.aheadCount}
                    behindCount={rankData.behindCount}
                />
            )}

            <div className="lectureList-info-bar">
                <span className="lecture-title-text">[개설강좌]</span>
            </div>

            <div className="lecture-table-container">
                <table className="lecture-table">

                    <colgroup>
                        <col style={{ width: "110px" }} />
                        <col style={{ width: "25px" }} />
                        <col style={{ width: "180px" }} />
                        <col style={{ width: "70px" }} />
                        <col style={{ width: "40px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "40px" }} />
                        <col style={{ width: "40px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "70px" }} />
                        <col style={{ width: "70px" }} />
                        <col style={{ width: "50px" }} />
                        <col style={{ width: "60px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "100px" }} />
                        <col style={{ width: "60px" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>{config.label}</th>
                        <th>No</th>
                        <th>교과목명</th>
                        <th>학수번호</th>
                        <th>분반</th>
                        <th>이수구분</th>
                        <th>학점</th>
                        <th>시간</th>
                        <th>수강인원</th>
                        <th>제한인원</th>
                        <th>담당교수</th>
                        <th>성적평가방법</th>
                        <th>학기주차</th>
                        <th>강의평가평점</th>
                        <th>강의실명</th>
                        <th>강의시간</th>
                        <th>역량구분</th>
                    </tr>
                    </thead>

                    <tbody>
                    {lectures.length > 0 ? (
                        lectures.map((lecture) => (
                            <LectureRow
                                key={lecture.lectureId}
                                lecture={lecture}
                                actionLabel={config.label}
                                onAction={() =>
                                    handleAction(lecture.lectureId)
                                }
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={17}>
                                데이터가 존재하지 않습니다.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LectureList;