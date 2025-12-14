import {create} from 'zustand';

const useCartStore = create((set) => ({
    cartList: [],
    setCartList: (data) => set({ cartList: data }),
}));

export default useCartStore;