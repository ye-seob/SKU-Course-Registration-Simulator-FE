import api from '../api/axiosInstance';

export const signup = async (signupData) => {
    try {
        const response = await api.post('/auth/signup', signupData);
        return response
    } catch (error) {
        throw error;
    }
};