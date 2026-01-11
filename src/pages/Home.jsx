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
    const mode = useViewStore((state) => state.mode);
    const [refreshKey, setRefreshKey] = useState(0);
    const isHome = mode === 'HOME';

    const topComponent = isHome ? <InfoNotice /> : <LectureList />;
    const bottomComponent = isHome ? <WarningNotice /> : <MyLectureList />;

    return (
            <div className="home-container">
                <SideBar  onRefresh={() => setRefreshKey(prev => prev + 1)} />
                <TwoSectionLayout
                    key={refreshKey}
                    top={topComponent}
                    bottom={bottomComponent}
                />
            </div>
    )
};

export default Home;