import {create} from 'zustand';

const useSearchStore = create((set) => ({
    major: '',
    type: '',

    setMajor: (major) => set({ major }),
    setType: (type) => set({ type }),

}));

export default useSearchStore;