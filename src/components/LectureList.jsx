import React from "react";
import "../styles/LectureList.css";
import Lecture from "./Lecture.jsx";
import {useLecture} from "../hooks/useLecture.js";

const LectureList = () => {
    const { lectureQuery } = useLecture();
    const lectureData = lectureQuery.data || [];

    return (
        <div className="lecture-wrapper">
            <div className="lectureList-info-bar">
                <span className="lecture-title-text">[자학과 개설강좌]</span>
            </div>

            <div className="lecture-table-container">
                <table className="lecture-table">
                    <colgroup>
                        <col style={{ width: "110px" }} />  {/* 장바구니담기 */}
                        <col style={{ width: "25px" }} />  {/* No */}
                        <col style={{ width: "180px" }} /> {/* 교과목명 */}
                        <col style={{ width: "70px" }} />  {/* 학수번호 */}
                        <col style={{ width: "40px" }} />  {/* 분반 */}
                        <col style={{ width: "50px" }} />  {/* 이수구분 */}
                        <col style={{ width: "40px" }} />  {/* 학점 */}
                        <col style={{ width: "40px" }} />  {/* 시간 */}
                        <col style={{ width: "50px" }} />  {/* 수강인원 */}
                        <col style={{ width: "50px" }} />  {/* 제한인원 */}
                        <col style={{ width: "70px" }} />  {/* 담당교수 */}
                        <col style={{ width: "70px" }} />  {/* 성적평가 */}
                        <col style={{ width: "50px" }} />  {/* 학기주차 */}
                        <col style={{ width: "60px" }} />  {/* 강의평가 */}
                        <col style={{ width: "100px" }} /> {/* 강의실명 */}
                        <col style={{ width: "100px" }} /> {/* 강의시간 */}
                        <col style={{ width: "60px" }} />  {/* 역량구분 */}
                    </colgroup>

                    <thead>
                    <tr>
                        <th className="col-cart">장바구니담기</th>
                        <th className="col-no">No</th>
                        <th className="col-name">교과목명</th>
                        <th className="col-code">학수번호</th>
                        <th className="col-class">분반</th>
                        <th className="col-type">이수<br/>구분</th>
                        <th className="col-credit">학<br/>점</th>
                        <th className="col-time">시<br/>간</th>
                        <th className="col-person">수강<br/>인원</th>
                        <th className="col-limit">제한<br/>인원</th>
                        <th className="col-prof">담당교수</th>
                        <th className="col-eval">성적평가방법</th>
                        <th className="col-week">학기주차</th>
                        <th className="col-rate">강의평가평점<br/>(5점만점)</th>
                        <th className="col-desc">강의실명</th>
                        <th className="col-schedule">강의시간<br/>(주)주간,(야)야간</th>
                        <th className="col-competency">역량구분</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lectureData.map((lecture) => (
                        <Lecture key={lecture.id} lecture={lecture}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LectureList;
