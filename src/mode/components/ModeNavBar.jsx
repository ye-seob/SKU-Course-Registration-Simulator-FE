import {useState} from 'react';
import {useMode} from '../hooks/useMode';
import useModeStore from '../store/modeStore';
import {MODE, MODE_CONFIG} from '../constants/mode';
import ModeConfirmModal from './ModeConfirmModal';
import '../styles/ModeNavBar.css';

const TABS = [MODE.ENROLL, MODE.CART, MODE.PRACTICE];

const ModeNavBar = () => {
    const { mode } = useMode();
    const setMode = useModeStore((s) => s.setMode);
    const [pendingMode, setPendingMode] = useState(null);

    const handleTabClick = (tab) => {
        if (tab === mode) return;
        setPendingMode(tab);
    };

    const handleConfirm = () => {
        setMode(pendingMode);
        setPendingMode(null);
    };

    const handleCancel = () => setPendingMode(null);

    return (
        <>
            <div className="mode-nav">
                {TABS.map((tab, i) => (
                    <div key={tab} className="mode-nav__item">
                        {i > 0 && <div className="mode-nav__divider" />}
                        <button
                            className={`mode-nav__tab ${mode === tab ? 'mode-nav__tab--active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >

                            <span className="mode-nav__label">{MODE_CONFIG[tab].title}</span>
                        </button>
                    </div>
                ))}
            </div>

            {pendingMode && (
                <ModeConfirmModal
                    targetMode={pendingMode}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
};

export default ModeNavBar;