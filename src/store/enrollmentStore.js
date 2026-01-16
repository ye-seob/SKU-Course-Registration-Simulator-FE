import {create} from 'zustand';

const useEnrollmentStore = create((set) => ({
    enrollmentList: [],
    setEnrollmentList: (data) => set({ enrollmentList: data }),
}));

export default useEnrollmentStore;