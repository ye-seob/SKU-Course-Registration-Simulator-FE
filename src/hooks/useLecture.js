import {useQuery} from "@tanstack/react-query";
import api from "../api/axiosInstance";
import useSearchStore from "../store/searchStore.js";


export const useLecture = (keyword) => {
    const { major, type } = useSearchStore();

    const lectureQuery = useQuery({
        queryKey: ["lecture", keyword, major, type],
        queryFn: async () => {
            const result = await api.get("/lectures", {
                params: {
                    keyword: keyword || '',
                    major: major || '',
                    type: type || '',
                }
            });
            return result.data.data;
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return { lectureQuery };
};