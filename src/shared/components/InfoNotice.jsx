import React from "react";
import "../styles/InfoNotice.css"

const InfoNotice = () => (
    <div className="course-info-wrapper">
        <div className="info-title-box">
            <p className="info-title-text">[수강신청 안내]</p>
        </div>

        <div className="info-table-container">
            <table className="sku-table">
                <colgroup>
                    <col width="20%" />
                    <col width="80%" />
                </colgroup>
                <tbody>

                <tr className='warning-header'>
                    <th >유의사항</th>
                    <td></td>
                </tr>

                <tr>
                    <th>자학과 교과목</th>
                    <td>자학과에 개설된 전공강좌, 교양강좌를 조회할 수 있습니다.</td>
                </tr>
                <tr>
                    <th>공통 교양</th>
                    <td>공통학과에 개설된 교필, 교선, 자선, 교직강좌를 조회할 수 있습니다.</td>
                </tr>
                <tr>
                    <th>타학과 교과목</th>
                    <td>타학과에 개설된 전공강좌, 교양강좌, 전체교양강좌를 조회할 수 있습니다.</td>
                </tr>
                <tr>
                    <th>부전공</th>
                    <td>부전공으로 개설된 강좌를 조회할 수 있습니다.</td>
                </tr>
                <tr>
                    <th>복수전공</th>
                    <td>복수전공으로 개설된 강좌를 조회할 수 있습니다.</td>
                </tr>
                <tr>
                    <th>융합전공</th>
                    <td>융합전공으로 개설된 강좌를 조회할 수 있습니다.</td>
                </tr>
                <tr>
                    <th>장바구니</th>
                    <td>장바구니에 신청된 강좌를 불러올 수 있습니다.</td>
                </tr>
                <tr className='same-as-th'>
                    <th>강의평가 공개 원칙</th>
                    <td className='same-as-th-td'>
                        1. 장바구니에 신청된 결과와 100% 공개를 원칙으로 함.<br/>
                        2. 교과목 담당교수의 재량과 결과를 인정하여 반영하여야 함.<br/>
                        3. 수강 확정 강좌는 각 단과대학별(4개 단과대, 교양), 점임, 비전임, 시간강사별로 공개
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
);

export default InfoNotice;