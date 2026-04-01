import useModeStore from '../store/modeStore';
import {MODE, MODE_CONFIG} from '../constants/mode.js';

export const useMode = () => {
    const mode = useModeStore((state) => state.mode);

    return {
        mode,
        config: MODE_CONFIG[mode],
        isEnroll: mode === MODE.ENROLL,
        isCart: mode === MODE.CART,
        isPractice: mode === MODE.PRACTICE,
    };
};