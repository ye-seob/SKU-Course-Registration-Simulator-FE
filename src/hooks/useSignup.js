import {useMutation} from '@tanstack/react-query';
import api from '../api/axiosInstance';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

export const useSignup = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (signupData) => api.post('/auth/signup', signupData),
        onSuccess: (data) => {
            toast.success("회원가입 성공!");
            // 메인 페이지 이동
            navigate('/login');
        },
        onError: (error) => {
            console.error('회원가입 실패:', error);
            toast.error(error.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
        },
    });
};