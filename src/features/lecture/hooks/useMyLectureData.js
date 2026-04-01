import {useEffect} from 'react';
import {useMode} from '../../../mode/hooks/useMode';
import useCartStore from '../../cart/store/cartStore';
import useEnrollmentStore from '../../enrollment/store/enrollmentStore';
import useViewStore from '../../view/store/viewStore';
import {getCart} from '../../cart/api/cart';
import {getEnrollments} from '../../enrollment/api/enrollment';
import {MODE} from '../../../mode/constants/mode.js';

export const useMyLectureData = () => {
    const { mode } = useMode();
    const { cartList, setCartList } = useCartStore();
    const { enrollmentList, setEnrollmentList } = useEnrollmentStore();
    const isWaiting = useViewStore((s) => s.isWaiting);

    useEffect(() => {
        const fetchData = async () => {
            if (mode === MODE.CART) {
                setCartList(await getCart());
            } else {
                setEnrollmentList(await getEnrollments());
            }
        };
        fetchData();
    }, [mode, isWaiting]);

    const list = mode === MODE.CART ? cartList : enrollmentList;

    return { list };
};