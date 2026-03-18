import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const useSearchStore = create(
    persist(
        (set) => ({
            major: '',
            type: '',
            isCart: false,
            keyword: '',

            setMajor: (major) => set({ major }),
            setType: (type) => set({ type }),
            setIsCart: (isCart) => set({ isCart }),
            setKeyword: (keyword) => set({ keyword }),
        }),
        {
            name: 'search-storage', // 로컬스토리지 key
            getStorage: () => localStorage,
        }
    )
);

export default useSearchStore;