import {useMode} from '../../../mode/hooks/useMode';
import useCartStore from '../../cart/store/cartStore';
import useViewStore from '../../view/store/viewStore';
import useQueueSocket from '../../enrollment/hooks/useQueueSocket';
import {addCart, getCart} from '../../cart/api/cart';
import {MODE} from '../../../mode/constants/mode.js';
import {getPracticeEnrollments, practiceEnrollment} from "../../enrollment/api/practiceEnrollment.js";
import useEnrollmentStore from "../../enrollment/store/enrollmentStore.js";

export const useLectureAction = () => {
    const { mode } = useMode();
    const { setCartList } = useCartStore();
    const { setPracticeEnrollmentList } = useEnrollmentStore();
    const { setWaiting } = useViewStore();
    const { connectQueue } = useQueueSocket();

    const ACTION_MAP = {
        [MODE.ENROLL]: {
            label: "신청",
            confirmMsg: "선택한 강의를 신청하시겠습니까?",
            action: async (lectureId) => {
                connectQueue(lectureId);
            },
        },
        [MODE.CART]: {
            label: "장바구니담기",
            confirmMsg: "선택한 과목을 장바구니에 담으시겠습니까?",
            action: async (lectureId) => {
                await addCart(lectureId);
                setCartList(await getCart());
            },
        },
        [MODE.PRACTICE]: {
            label: "신청",
            confirmMsg: "선택한 강의를 신청하시겠습니까?",
            action: async (lectureId) => {
                await practiceEnrollment(lectureId);
                setPracticeEnrollmentList(await getPracticeEnrollments());
            },
        },
    };

    const config = ACTION_MAP[mode] ?? ACTION_MAP[MODE.ENROLL];

    const handleAction = async (lectureId) => {
        if (!window.confirm(config.confirmMsg)) return;
        try {
            await config.action(lectureId);
        } catch (err) {
            alert(err.message);
            setWaiting(false);
        }
    };

    return { config, handleAction };
};