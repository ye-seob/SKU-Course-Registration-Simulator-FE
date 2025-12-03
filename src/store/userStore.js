import {create} from 'zustand';

// localStorage에서 초기 상태 불러오기
const getInitialUser = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
};

const useUserStore = create((set) => ({
    user: getInitialUser(),  // 초기 상태 설정
    setUser: (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));  // localStorage 저장
        set({ user: userData });
    },
    clearUser: () => {
        localStorage.removeItem('user');  // localStorage 제거
        localStorage.removeItem('accessToken')
        set({ user: null });
    },
}));

export default useUserStore;