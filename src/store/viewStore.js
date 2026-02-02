import {create} from "zustand";
import {persist} from "zustand/middleware";

const useViewStore = create(
    persist(
        (set) => ({
            hasSeenIntro: false,
            finishIntro: () => set({ hasSeenIntro: true }),

            mode: localStorage.getItem("loginMode") || "ENROLL",
            setMode: (mode) => set({ mode }),

            isWaiting: false,
            setWaiting: (value) => set({ isWaiting: value }),
        }),
        {
            name: "view-storage",
            partialize: (state) => ({
                mode: state.mode,
                hasSeenIntro: state.hasSeenIntro,
            }),
        }
    )
);

export default useViewStore;