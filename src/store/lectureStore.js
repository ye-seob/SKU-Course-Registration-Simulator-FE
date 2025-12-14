import {create} from 'zustand';

const useLectureStore = create((set) => ({
    lectures: [],
    setLectures: (data) => set({ lectures: data }),
}));

export default useLectureStore;