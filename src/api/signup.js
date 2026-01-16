import api from '../api/axiosInstance';
import {toast} from 'react-toastify';

export const signup = async (signupData) => {
    try {
        const response = await api.post('/auth/signup', signupData);

        toast.success("회원가입 성공");

        return response
    } catch (error) {
        console.error('회원가입 실패:', error);
        toast.error( '회원가입 중 오류가 발생했습니다.');
        throw error;
    }
};