import "../../styles/LectureList.css";
import WaitingView from "../../../enrollment/components/WaitingView.jsx";
import useViewStore from "../../../view/store/viewStore.js";
import useQueueSocket from "../../../enrollment/hooks/useQueueSocket.js";
import LectureTable from "./LectureTable.jsx";
import {useLectureAction} from "../../hooks/useLectureAction.js";
import {useLectureData} from "../../hooks/useLectureData.js";

const LectureList = () => {
    const { isWaiting } = useViewStore(); //
    const { lectures } = useLectureData();
    const { rankData } = useQueueSocket();
    const { config, handleAction } = useLectureAction();

    return (
        <div className="lecture">
            {isWaiting && (
                <WaitingView
                    aheadCount={rankData.aheadCount}
                    behindCount={rankData.behindCount}
                />
            )}

            <div className="lecture__header">
                <span>[개설강좌]</span>
            </div>
                <LectureTable
                    lectures={lectures}
                    actionLabel={config.label}
                    onAction={handleAction}
                />
        </div>
    );
};

export default LectureList;