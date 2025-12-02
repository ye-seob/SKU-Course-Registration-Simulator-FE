import {useMutation} from '@tanstack/react-query';
import api from '../api/axiosInstance';
import {useNavigate} from 'react-router-dom';
import useUserStore from '../store/userStore';

export const useLogin = () => {
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    return useMutation({
        mutationFn: (loginData) => api.post("/auth/login", loginData),
        onSuccess: (data) => {
            const userData = data.data.data;

            // Zustand 상태에 저장
            setUser(userData);

            navigate('/');
        },
        onError: (error) => {
            console.error("로그인 실패:", error);
        },
    });
};