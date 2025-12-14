import api from "../api/axiosInstance.js";

// 장바구니 조회
export const getCart = async (setCartList) => {
    try {
        const response = await api.get("/carts");

        setCartList(response.data.data);

        return response.data.data;
    } catch (error) {
        console.error("장바구니 조회 실패:", error);
        setCartList([]);
        throw error;
    }
};

// 장바구니 추가
export const addCart = async (lectureId, setCartList) => {
    try {
        const response = await api.post("/carts/add", { lectureId });

        await getCart(setCartList);

        return response.data;
    } catch (error) {
        console.error("장바구니 추가 실패:", error);
        throw error;
    }
};

// 장바구니 삭제
export const deleteCart = async (lectureId, setCartList) => {
    try {
        const response = await api.delete(`/carts/delete/${lectureId}`);

        // 삭제 후 갱신
        await getCart(setCartList);

        return response.data;
    } catch (error) {
        console.error("장바구니 삭제 실패:", error);
        throw error;
    }
};