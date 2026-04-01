import React, {useState} from 'react';
import SideBar from "../shared/components/SideBar.jsx";
import "../shared/styles/home.css";
import TwoSectionLayout from "../shared/components/Layout.jsx";
import LectureList from "../features/lecture/components/lecture/LectureList.jsx";
import MyLectureList from "../features/lecture/components/myLecture/MyLectureList.jsx";
import InfoNotice from "../shared/components/InfoNotice.jsx";
import WarningNotice from "../shared/components/WarningNotice.jsx";
import useViewStore from "../features/view/store/viewStore.js";
import ModeNavBar from "../mode/components/ModeNavBar.jsx";

const Lecture = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const hasSeenIntro = useViewStore((s) => s.hasSeenIntro);
    const finishIntro = useViewStore((s) => s.finishIntro);

    const showIntro = !hasSeenIntro;

    const topComponent = showIntro ? <InfoNotice /> : <LectureList />;
    const bottomComponent = showIntro ? <WarningNotice /> : <MyLectureList />;

    return (
            <div className="layout">
                <SideBar  onRefresh={() => {
                        finishIntro(true);
                        setRefreshKey(prev => prev + 1)
                }} />
                <div className="layout__main">
                    <ModeNavBar />

                    <TwoSectionLayout
                        key={refreshKey}
                        top={topComponent}
                        bottom={bottomComponent}
                    />
                </div>

            </div>
    )
};

export default Lecture;