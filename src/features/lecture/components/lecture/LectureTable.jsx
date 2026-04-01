import LectureRow from './LectureRow.jsx';

const COLUMNS = [
    { label: "No",        width: "25px"  },
    { label: "교과목명",   width: "180px" },
    { label: "학수번호",   width: "70px"  },
    { label: "분반",      width: "40px"  },
    { label: "이수구분",   width: "50px"  },
    { label: "학점",      width: "40px"  },
    { label: "시간",      width: "40px"  },
    { label: "수강인원",   width: "50px"  },
    { label: "제한인원",   width: "50px"  },
    { label: "담당교수",   width: "70px"  },
    { label: "성적평가방법", width: "70px" },
    { label: "학기주차",   width: "50px"  },
    { label: "강의평가평점", width: "60px" },
    { label: "강의실명",   width: "100px" },
    { label: "강의시간",   width: "100px" },
    { label: "역량구분",   width: "60px"  },
];

const LectureTable = ({ lectures, actionLabel, onAction }) => (
    <div className="lecture-table-container">
        <table className="lecture-table">
            <colgroup>
                <col style={{ width: "110px" }} />
                {COLUMNS.map((col) => (
                    <col key={col.label} style={{ width: col.width }} />
                ))}
            </colgroup>
            <thead>
            <tr>
                <th>{actionLabel}</th>
                {COLUMNS.map((col) => (
                    <th key={col.label}>{col.label}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {lectures.length > 0 ? (
                lectures.map((lecture, index) => (
                    <LectureRow
                        key={lecture.lectureId}
                        lecture={lecture}
                        actionLabel={actionLabel}
                        onAction={() => onAction(lecture.lectureId)}
                        index={index}
                    />
                ))
            ) : (
                <tr>
                    <td colSpan={COLUMNS.length + 1}>데이터가 존재하지 않습니다.</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
);

export default LectureTable;