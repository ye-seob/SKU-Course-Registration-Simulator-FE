import api from '../../../shared/api/axiosInstance.js';

export const signup = async (signupData) => {
    try {
        const response = await api.post('/auth/signup', signupData);
        return response
    } catch (error) {
        throw error;
    }
};