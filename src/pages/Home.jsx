import React, {useState} from 'react';
import SideBar from "../shared/components/SideBar.jsx";
import "../shared/styles/home.css";
import TwoSectionLayout from "../shared/components/Layout.jsx";
import LectureList from "../features/lecture/components/LectureList.jsx";
import MyLectureList from "../features/lecture/components/MyLectureList.jsx";
import InfoNotice from "../shared/components/InfoNotice.jsx";
import WarningNotice from "../shared/components/WarningNotice.jsx";

import useViewStore from "../features/view/store/viewStore.js";

const Home = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const hasSeenIntro = useViewStore((s) => s.hasSeenIntro);
    const finishIntro = useViewStore((s) => s.finishIntro);

    const showIntro = !hasSeenIntro;

    const topComponent = showIntro ? <InfoNotice /> : <LectureList />;
    const bottomComponent = showIntro ? <WarningNotice /> : <MyLectureList />;

    return (
            <div className="home-container">
                <SideBar  onRefresh={() => {
                    {
                        finishIntro(true);
                        setRefreshKey(prev => prev + 1)
                    }
                }} />
                <TwoSectionLayout
                    key={refreshKey}
                    top={topComponent}
                    bottom={bottomComponent}
                />
            </div>
    )
};

export default Home;