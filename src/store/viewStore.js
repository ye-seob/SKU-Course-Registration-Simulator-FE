import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useViewStore = create(
    persist(
        (set) => ({
            mode: 'HOME',
            setMode: (mode) => set({ mode }),
        }),
        {
            name: 'view-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useViewStore;