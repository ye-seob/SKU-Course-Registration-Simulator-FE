import React, {useState} from 'react';
import SideBar from "../components/SideBar.jsx";
import "../styles/home.css";
import TwoSectionLayout from "../components/Layout";
import LectureList from "../components/LectureList.jsx";
import MyLectureList from "../components/MyLectureList.jsx";
import InfoNotice from "../components/InfoNotice.jsx";
import WarningNotice from "../components/WarningNotice.jsx";

import useViewStore from "../store/viewStore.js";

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
                        finishIntro();
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