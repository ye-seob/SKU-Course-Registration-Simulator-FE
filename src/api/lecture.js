import api from "../api/axiosInstance.js";

export const rateLecture = async (lectureId, score) => {
    try {
        const response = await api.post(`/lectures/${lectureId}/rating`, null, {
            params: {
                score: score
            }
        });

        return response.data;
    } catch (error) {
         console.error(error)
    }
};
