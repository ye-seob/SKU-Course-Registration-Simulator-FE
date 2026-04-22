import api from "../../../shared/api/axiosInstance.js";

export const getPracticeEnrollments = async () => {
    try {
        const response = await api.get("/practice/enrollments");

        return response.data;
    } catch (error) {
        console.error("수강신청 조회 실패:", error);

        throw error;
    }
};


export const practiceEnrollment = async (lectureId) => {
    try {
        const response = await api.post(`/practice/enroll/${lectureId}`);

        return response.data;
    } catch (error) {
        console.error("수강신청 실패:", error);

        throw error;
    }
};
export const cancelPracticeEnrollment = async (lectureId) => {
    try {
        const response = await api.delete(`/practice/enroll/${lectureId}`);

        return response.data;
    } catch (error) {
        console.error("수강신청 취소 실패:", error);

        throw error;
    }
};
