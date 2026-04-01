import {useMode} from '../../../mode/hooks/useMode';
import useCartStore from '../../cart/store/cartStore';
import useEnrollmentStore from '../../enrollment/store/enrollmentStore';
import {deleteCart, getCart} from '../../cart/api/cart';
import {cancelEnrollment, getEnrollments} from '../../enrollment/api/enrollment';
import {MODE} from '../../../mode/constants/mode';

const MAX_ROWS = 10;

export const useMyLectureAction = (list) => {
    const { mode } = useMode();
    const { setCartList } = useCartStore();
    const { setEnrollmentList } = useEnrollmentStore();

    const ACTION_MAP = {
        [MODE.CART]: {
            title: "[장바구니담기]",
            descPrefix: "※ ",
            highlight: "시간중복에 관계없이 최대 10개 과목",
            descSuffix: "까지 담을 수 있습니다.",
            buttonLabel: "장바구니삭제",
            confirmMsg: "선택한 과목을 삭제하시겠습니까?",
            countText: (l) => `[ 담긴교과목수 : ${l.length}  총 학점 : ${l.length * 3} ]`,
            action: async (lectureId) => {
                await deleteCart(lectureId);
                setCartList(await getCart());
            },
        },
        [MODE.ENROLL]: {
            title: "[수강신청 취소]",
            descPrefix: "※ 수강신청 취소할 교과목은 ",
            highlight: "취소 ",
            descSuffix: "버튼을 클릭하세요.",
            confirmMsg: "선택한 과목을 취소하시겠습니까?",
            countText: (l) =>
                `[ 신청과목 수 : ${l.length}  신청학점 : ${l.reduce((sum, lec) => sum + lec.credit, 0)} ]`,
            action: async (lectureId) => {
                await cancelEnrollment(lectureId);
                setEnrollmentList(await getEnrollments());
            },
        },
        [MODE.PRACTICE]: {
            title: "[연습 신청 취소]",
            descPrefix: "",
            highlight: "",
            descSuffix: "※ 연습 신청한 과목을 취소할 수 있습니다.",
            confirmMsg: "연습 신청을 취소하시겠습니까?",
            countText: (l) => `[ 신청과목 수 : ${l.length} ]`,
            action: async (lectureId) => {
                // 추후 구현
            },
        },
    };

    const config = ACTION_MAP[mode] ?? ACTION_MAP[MODE.ENROLL];

    const emptyRows = Math.max(0, MAX_ROWS - list.length);


    const handleAction = async (lectureId) => {
        if (!window.confirm(config.confirmMsg)) return;
        try {
            await config.action(lectureId);
        } catch (err) {
            console.error(err);
            alert('처리에 실패했습니다.');
        }
    };

    return { config, emptyRows, handleAction };
};