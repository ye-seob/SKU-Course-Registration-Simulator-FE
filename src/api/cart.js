import api from "../api/axiosInstance.js";

// 장바구니 조회
export const getCart = async () => {
    try {
        const response = await api.get("/carts");

        return response.data.data;
    } catch (error) {
        console.error("장바구니 조회 실패:", error);

        throw error;
    }
};

// 장바구니 추가
export const addCart = async (lectureId) => {
    try {
        const response = await api.post("/carts/add", { lectureId });

        return response.data;
    } catch (error) {
        console.error("장바구니 추가 실패:", error);
        throw error;
    }
};

// 장바구니 삭제
export const deleteCart = async (lectureId) => {
    try {
         await api.delete(`/carts/delete/${lectureId}`);

    } catch (error) {
        console.error("장바구니 삭제 실패:", error);
        throw error;
    }
};