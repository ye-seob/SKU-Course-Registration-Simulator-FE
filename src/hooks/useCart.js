import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import api from "../api/axiosInstance";

export const useCart = () => {
    const queryClient = useQueryClient();

    // 장바구니 조회
    const cartQuery = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const result = await api.get("/carts");

            console.log(result.data.data)

            return result.data.data;
        },
        onError: (error) => {
            console.error(error);
        }
    });

    const addCartMutation = useMutation({
        mutationFn: (lectureId) => api.post(`/carts/add`, {lectureId}),
        onSuccess: () => {
            queryClient.invalidateQueries(["cart"]);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    // 장바구니 삭제
    const deleteCartMutation = useMutation({
        mutationFn: (lectureId) => api.delete(`/carts/delete/${lectureId}`),
        onSuccess: () => {
            queryClient.invalidateQueries(["cart"]);

        },
        onError: (error) => {
            console.error(error);
        }
    });

    return {cartQuery, addCartMutation, deleteCartMutation};
}