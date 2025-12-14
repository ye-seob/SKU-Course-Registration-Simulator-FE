import api from "../api/axiosInstance.js";

export const getLectures = async (keyword, major ,type, setLectures) => {
    try {
        const response = await api.get("/lectures", {
            params: {
                keyword: keyword || "",
                major: major || "",
                type: type || "",
            },
        });

        setLectures(response.data.data);

        return response.data.data;
    } catch (error) {
        console.error("강의 조회 실패", error);
        setLectures([]);
        return [];
    }
};