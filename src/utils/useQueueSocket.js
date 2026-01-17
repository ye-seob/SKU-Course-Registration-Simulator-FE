import {useRef, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";


import useViewStore from "../store/viewStore";


const useQueueSocket = (onRefresh) => {

    const stompRef = useRef(null);

    /**
     * lectureIdRef
     * - 현재 대기열에 들어간 강의 ID를 저장
     * - 소켓 종료, 취소 API 호출 시 필요
     */
    const lectureIdRef = useRef(null);

    /**
     * - 현재 사용자가 대기열에 있는지 여부를 전역에서 관리
     */
    const { setWaiting } = useViewStore();

    /**
     * rankData 상태
     * - aheadCount  : 나보다 앞에 있는 인원 수
     * - behindCount : 나보다 뒤에 있는 인원 수
     *
     * 서버에서 주기적으로 보내주는 대기열 정보
     */
    const [rankData, setRankData] = useState({
        aheadCount: 0,
        behindCount: 0,
    });

    /**
     * 대기열 소켓 연결 함수
     * @param lectureId 대기열에 진입할 강의 ID
     */
    const connectQueue = (lectureId) => {

        if(lectureId == null){
            alert("다시 시도해주세요.")
            return;
        }

        // 현재 강의 ID를 ref에 저장 (나중에 취소시 사용)
        lectureIdRef.current = lectureId;


        /**
         * SockJS 소켓 생성
         * - 서버의 /ws 엔드포인트와 연결
         */
        const socket = new SockJS(import.meta.env.VITE_WS_URL);

        /**
         * SockJS 위에 STOMP 프로토콜 적용
         *  send / subscribe 가능
         */
        const stompClient = Stomp.over(socket);


        const token = localStorage.getItem("accessToken");
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        /**
         * STOMP 서버 연결
         * - headers     : 인증 정보
         * - onConnect   : 연결 성공 시 실행
         * - onError     : 연결 실패 시 실행
         */
        stompClient.connect(
            headers,
            () => {

                /**
                 * [대기열 순번 수신]
                 * - /user/queue-rank
                 * - Spring의 convertAndSendToUser()로 전달되는 개인 큐
                 * - 자신의 순번 정보만 수신
                 */
                stompClient.subscribe("/user/queue-rank", (message) => {
                    const data = JSON.parse(message.body);
                    setRankData(data);
                });

                /**
                 * [대기열 종료 수신]
                 * - 수강신청 성공 / 실패 / 강제 종료 등
                 */
                stompClient.subscribe("/user/queue-end", (message) => {
                    const data = JSON.parse(message.body);

                    if (data?.status === "FAIL") {
                        alert(data.message ?? "수강신청에 실패했습니다.");
                    }


                    // 대기열 종료 공통 처리
                    handleQueueEnd(data);
                });

                /**
                 * [대기열 진입 요청]
                 * - 서버의 @MessageMapping("/enter/{lectureId}")로 전달
                 * - 이 시점부터 서버 대기열 로직 시작
                 */
                stompClient.send(
                    `/app/enter/${lectureId}`,
                    {},
                    JSON.stringify({})
                );

                // 전역 상태를 "대기 중"으로 변경
                setWaiting(true);
            },
            (error) => {
                console.log("STOMP error", error);
            }
        );

        // STOMP 클라이언트를 ref에 저장
        stompRef.current = stompClient;
    };

    /**
     * 대기열 종료 처리
     * - 서버에서 종료 메시지를 받은 경우
     * - 성공/실패 여부와 무관하게 공통 정리
     */
    const handleQueueEnd = () => {

        /**
         * 소켓 연결 종료
         */
        disconnectSocket();

        // 순번 정보 초기화
        setRankData({ aheadCount: 0, behindCount: 0 });

        // 대기 상태 해제
        setWaiting(false);

        // 강의 ID 초기화
        lectureIdRef.current = null;

        if (onRefresh) onRefresh();
    };

    const disconnectSocket = () => {
        if (stompRef.current) {
            stompRef.current.disconnect();
            stompRef.current = null;
        }

    };

    return {
        connectQueue,
        rankData,
    };
};

export default useQueueSocket;