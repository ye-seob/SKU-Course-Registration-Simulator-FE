import {create} from "zustand";
import {persist} from "zustand/middleware";

const useViewStore = create(
    persist(
        (set) => ({
            mode: "HOME",
            setMode: (mode) => set({ mode }),

            isWaiting: false,
            setWaiting: (value) => set({ isWaiting: value }),
        }),
        {
            name: "view-storage",
            partialize: (state) => ({
                mode: state.mode,
            }),
        }
    )
);

export default useViewStore;