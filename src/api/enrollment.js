import api from "../api/axiosInstance.js";

// 수강신청 조회
export const getEnrollments = async () => {
    try {
        const response = await api.get("/enrollments/list");

        return response.data.data;
    } catch (error) {
        console.error("수강신청 조회 실패:", error);

        throw error;
    }
};

// 수강신청
export const enrollLecture = async (lectureId) => {
    try {
        const response = await api.post("/enrollments/enroll", null, { params: { lectureId } });

        return response.data;
    } catch (error) {
        console.error("수강신청 실패:", error);
        throw error;
    }
};

// 수강신청 취소
export const cancelEnrollment = async (lectureId) => {
    try {
        const response = await api.post("/enrollments/cancel", null, { params: { lectureId } });

        return response.data;
    } catch (error) {
        console.error("수강신청 취소 실패:", error);
        throw error;
    }
};