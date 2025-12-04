import React from "react";
import "../styles/LectureList.css";
import Lecture from "./Lecture.jsx";

const LectureList = () => {
    const lectureData = [
        {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 7,
        name: "빅데이터소프트웨어",
        courseId: "CS1403",
        section: "01",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "유커열",
        evalMethod: "",
        week: "",
        rating: "4.46",
        desc: "(복-518)-컴퓨터시스템설계실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 1,
        name: "객체지향프로그래밍",
        courseId: "CS1149",
        section: "03",
        type: "전심",
        credit: "3",
        time: "3.0",
        enrolled: "0.00",
        limit: "35.00",
        professor: "김선희",
        evalMethod: "",
        week: "",
        rating: "",
        desc: "(복-617)-소프트웨어개발실습실",
        schedule: "(주) 화 : 23, 24",
        competency: ""
    }, {
        id: 8,
        name: "알고리즘",
        courseId: "CS101",
        section: "01",
        type: "전공",
        credit: "3",
        time: "3.0",
        enrolled: "0",
        limit: "30",
        professor: "김교수",
        evalMethod: "P/nP",
        week: "",
        rating: "",
        desc: "A101",
        schedule: "월1, 수3",
        competency: ""
    }];

    return (<div className="lecture-wrapper">
            <p className="lecture-title-text">[자학과 개설강좌]</p>
            <div className="lecture-container">
                <table className="list">
                    <thead>
                    <tr>
                        <th className="col-cart">장바구니담기</th>
                        <th className="col-no">No</th>
                        <th className="col-name">교과목명</th>
                        <th className="col-code">학수번호</th>
                        <th className="col-class">분반</th>
                        <th className="col-type">이수<br/>구분</th>
                        <th className="col-credit">학점</th>
                        <th className="col-time">시간</th>
                        <th className="col-person">수강<br/>인원</th>
                        <th className="col-limit">제한<br/>인원</th>
                        <th className="col-prof">담당교수</th>
                        <th className="col-eval">성적평가방법</th>
                        <th className="col-week">학기주차</th>
                        <th className="col-rate">강의평가평점<br/>(5점만점)</th>
                        <th className="col-desc">강의설명</th>
                        <th className="col-schedule">강의시간<br/>(주)주간,(야)야간</th>
                        <th className="col-competency">역량구분</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lectureData.map((lecture) => (<Lecture key={lecture.id} lecture={lecture}/>))}
                    </tbody>
                </table>
            </div>
        </div>);
};

export default LectureList;