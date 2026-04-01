export const MODE = {
    ENROLL: 'ENROLL',
    CART: 'CART',
    PRACTICE: 'PRACTICE',
};

export const MODE_CONFIG = Object.freeze({
    [MODE.ENROLL]: {
        title: "수강신청",
        description: "08시부터 22시까지 정각에 로그인 시 실제처럼 대기열이 발생합니다"
    },
    [MODE.CART]: {
        title: "장바구니",
        description: "원하는 강의를 미리 담아둘 수 있습니다"
    },
    [MODE.PRACTICE]: {
        title: "연습",
        description: "시간 제한 없이 언제든 수강신청을 연습할 수 있습니다"
    },
});

