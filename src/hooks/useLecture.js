// useLecture.js (수정)

import {useQuery} from "@tanstack/react-query";
import api from "../api/axiosInstance";

// 1. 함수 인수로 검색 키워드(keyword)를 받도록 수정합니다.
export const useLecture = (keyword) => {

    const lectureQuery =  useQuery({
        // queryKey에 keyword를 추가하여eyword가 바뀔 때마다 쿼리를 새로 실행(refetch)하도록 설정
        queryKey: ["lecture", keyword],

        queryFn: async () => {
            const result = await api.get("/lectures", {
                params: {
                    keyword: keyword || ''
                }
            });

            return result.data.data;
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return { lectureQuery }
};
