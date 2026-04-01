import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {MODE} from "../constants/mode.js";

const useModeStore = create(
    persist(
        (set) => ({
            mode: MODE.ENROLL,
            setMode: (mode) => set({ mode }),
        }),
        {
            name: 'mode-storage',
        }
    )
);

export default useModeStore;