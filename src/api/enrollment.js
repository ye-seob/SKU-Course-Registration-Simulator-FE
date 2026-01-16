import api from "../api/axiosInstance.js";

// 수강신청 조회
export const getEnrollments = async () => {
    try {
        const response = await api.get("/enrollments/list");

        return response.data;
    } catch (error) {
        console.error("수강신청 조회 실패:", error);

        throw error;
    }
};



// 수강신청 취소
export const cancelEnrollment = async (lectureId) => {
    try {
        const response = await api.post("/enrollments/cancel", null, { params: { lectureId } });

        return response;
    } catch (error) {
        console.error("수강신청 취소 실패:", error);
        throw error;
    }
};

