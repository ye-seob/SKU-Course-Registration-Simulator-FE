import api from "../api/axiosInstance.js";

export const getLectures = async (keyword, major ,type) => {
    try {
        const response = await api.get("/lectures", {
            params: {
                keyword: keyword || "",
                major: major || "",
                type: type || "",
            },
        });


        return response.data
    } catch (error) {
        console.error("강의 조회 실패", error);

        return [];
    }
};