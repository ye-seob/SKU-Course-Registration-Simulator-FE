import React, {useEffect} from "react";
import "../styles/LectureList.css";
import LectureRow from "./LectureRow.jsx";
import useViewStore from "../store/viewStore.js";
import useLectureStore from "../store/lectureStore.js";

import {getLectures} from "../api/getLectures.js";
import useSearchStore from "../store/searchStore.js";

const LectureList = () => {
    const { mode } = useViewStore();
    const { lectures,setLectures } = useLectureStore();

    const isCart = mode === "CART";

    const lectureData = lectures;
    const { major, type, keyword } = useSearchStore();

    useEffect(() => {
        const fetchData = async () => {
            await getLectures(keyword, major, type ,setLectures);

        };
        fetchData();
    }, [keyword, major, type ,setLectures]);


    return (
        <div className="lecture-wrapper">
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
                        <th className="col-cart">{isCart ? "장바구니담기" : "신청"}</th>
                        <th>No</th>
                        <th>교과목명</th>
                        <th>학수번호</th>
                        <th>분반</th>
                        <th>이수<br />구분</th>
                        <th>학<br />점</th>
                        <th>시<br />간</th>
                        <th>수강<br />인원</th>
                        <th>제한<br />인원</th>
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
                    {lectureData.length > 0 ? (
                        lectureData.map((lecture) => (
                            <LectureRow key={lecture.id} lecture={lecture} mode={mode} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={17}>데이터가 존재하지 않습니다.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LectureList;