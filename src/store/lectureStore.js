import {create} from 'zustand';

const useLectureStore = create((set) => ({
    lectures: [],
    setLectures: (data) => {
        console.log("setLectures 호출:", data);
        set({ lectures: data });
    }
}));

export default useLectureStore;