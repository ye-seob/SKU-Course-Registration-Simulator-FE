import {create} from 'zustand';

const useEnrollmentStore = create((set) => ({
    enrollmentList: [],
    setEnrollmentList: (data) => set({ enrollmentList: data }),
    practiceEnrollmentList: [],
    setPracticeEnrollmentList: (data) => set({ practiceEnrollmentList: data }),
}));

export default useEnrollmentStore;