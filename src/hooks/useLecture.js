import {useQuery} from "@tanstack/react-query";
import api from "../api/axiosInstance";

export const useLecture = () => {
     const lectureQuery =  useQuery({
        queryKey: ["lecture"],
        queryFn: async () => {
            const result = await api.get("/lectures");

            return result.data.data;
        },
        onError: (error) => {
            console.error(error);
        }
    });
     return { lectureQuery }
};