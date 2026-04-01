const RatingModal = ({ lectureName, onRate, onClose }) => (
    <div className="rating-modal-backdrop" onClick={onClose}>
        <div className="rating-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rating-modal-header">
                <h3>{lectureName}</h3>
                <p>이 강의에 대한 만족도를 선택해주세요.</p>
            </div>
            <div className="rating-button-group">
                {[1, 2, 3, 4, 5].map((score) => (
                    <button
                        key={score}
                        className="rating-score-btn"
                        onClick={() => onRate(score)}
                    >
                        {score}
                    </button>
                ))}
            </div>
            <button className="rating-close-btn" onClick={onClose}>
                취소
            </button>
        </div>
    </div>
);

export default RatingModal;