// login.js
import api from '../api/axiosInstance.js';
import useUserStore from '../store/userStore.js';
import useViewStore from "../store/viewStore.js";

export const login = async (loginData) => {
    const setUser = useUserStore.getState().setUser;
    const setMode = useViewStore.getState().setMode;

    try {
        const response = await api.post("/auth/login", loginData);
        const userData = response.data.data;
        const token = userData.token;

        localStorage.setItem('accessToken', token);
        setUser(userData); // Zustand 상태 저장
        setMode("HOME");

        return userData; // navigate는 컴포넌트에서 처리
    } catch (error) {
        console.error("로그인 실패:", error);
        throw error;
    }
};