import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (!error.response) {
            console.error("Network error:", error);
            return Promise.reject({ message: "Network Error", originalError: error });
        }

        const { status, data } = error.response;

        if (status === 403) {
             alert("토큰이 만료되었습니다. 다시 로그인 해주세요.")
             localStorage.removeItem('accessToken');
             window.location.href = '/login';
        }


        console.error("API Error:", data?.message || error.message);

        return Promise.reject(error);
    }
);


export default api;