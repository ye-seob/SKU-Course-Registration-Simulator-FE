import MyLectureRow from './MyLectureRow.jsx';

const COLUMNS = [
    { label: "교과목명",  width: "250px" },
    { label: "학수번호",  width: "100px" },
    { label: "분반",     width: "65px"  },
    { label: <>"이수<br />구분"</>,  width: "65px"  },
    { label: <>"학<br />점"</>,      width: "50px"  },
    { label: <>"시<br />간"</>,      width: "50px"  },
    { label: "담당교수",  width: "100px" },
    { label: "강의설명",  width: "120px" },
    { label: "강의시간",  width: "150px" },
    { label: "비고",     width: "60px"  },
];

const EMPTY_COLS = 11;

const MyLectureTable = ({ list, buttonLabel, onAction, emptyRows }) => (
    <div className="cart-table-container">
        <table className="cartList-table">
            <colgroup>
                <col style={{ width: "100px" }} />
                {COLUMNS.map((col, i) => (
                    <col key={i} style={{ width: col.width }} />
                ))}
            </colgroup>
            <thead>
            <tr>
                <th className="col-btn">{buttonLabel}</th>
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
                <MyLectureRow
                    key={`${lecture.lectureId}-${lecture.addedAt}`}
                    lecture={lecture}
                    actionLabel={buttonLabel}
                    onAction={() => onAction(lecture.lectureId)}
                />
            ))}
            {Array.from({ length: emptyRows }).map((_, i) => (
                <tr key={`empty-${i}`} className="empty-row">
                    {Array.from({ length: EMPTY_COLS }).map((__, idx) => (
                        <td key={idx}>&nbsp;</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default MyLectureTable;