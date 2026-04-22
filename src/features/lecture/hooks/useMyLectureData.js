import {useEffect} from 'react';
import {useMode} from '../../../mode/hooks/useMode';
import useCartStore from '../../cart/store/cartStore';
import useEnrollmentStore from '../../enrollment/store/enrollmentStore';
import useViewStore from '../../view/store/viewStore';
import {getCart} from '../../cart/api/cart';
import {getEnrollments} from '../../enrollment/api/enrollment';
import {MODE} from '../../../mode/constants/mode.js';
import {getPracticeEnrollments} from "../../enrollment/api/practiceEnrollment.js";

export const useMyLectureData = () => {
    const { mode } = useMode();

    const { cartList, setCartList } = useCartStore();
    const {
        enrollmentList,
        setEnrollmentList,
        practiceEnrollmentList,
        setPracticeEnrollmentList
    } = useEnrollmentStore();

    const isWaiting = useViewStore((s) => s.isWaiting);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 장바구니 모드 → 장바구니 목록 조회
                if (mode === MODE.CART) {
                    const data = await getCart();
                    setCartList(data);
                }

                // 수강신청 모드 → 수강신청 목록 조회
                if (mode === MODE.ENROLL) {
                    const data = await getEnrollments();
                    setEnrollmentList(data);
                }

                // 연습 수강신청 모드 → 연습 신청 목록 조회
                if (mode === MODE.PRACTICE) {
                    const data = await getPracticeEnrollments();
                    setPracticeEnrollmentList(data);
                }
            } catch (error) {
                console.error('강의 데이터 조회 실패:', error);
            }
        };

        fetchData();
    }, [mode, isWaiting]);


    let list;
    if (mode === MODE.CART) {
        list = cartList;
    } else if (mode === MODE.ENROLL) {
        list = enrollmentList;
    } else {
        list = practiceEnrollmentList;
    }

    return { list };
};