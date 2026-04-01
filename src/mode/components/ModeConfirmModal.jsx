import {MODE_CONFIG} from '../constants/mode.js';
import '../styles/ModeConfirmModal.css';


const ModeConfirmModal = ({ targetMode, onConfirm, onCancel }) => {
    const config = MODE_CONFIG[targetMode];

    return (
        <div className="modal" onClick={onCancel}>
            <div className="modal__card" onClick={(e) => e.stopPropagation()}>
                <p className="modal__title">모드를 변경할까요?</p>
                <p className="modal__desc">{config.description}</p>
                <div className="modal__actions">
                    <button className="modal__button modal__button--cancel" onClick={onCancel}>취소</button>
                    <button className="modal__button modal__button--confirm" onClick={onConfirm}>변경하기</button>
                </div>
            </div>
        </div>
    );
};

export default ModeConfirmModal;