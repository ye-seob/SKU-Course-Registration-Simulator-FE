import React from "react";
import "../../../cart/styles/CartList.css";

import MyLectureTable from "./MyLectureTable.jsx";
import {useMyLectureData} from "../../hooks/useMyLectureData.js";
import {useMyLectureAction} from "../../hooks/useMyLectureAction.js";


const MyLectureList = () => {
    const { list } = useMyLectureData();
    const { config, emptyRows, handleAction } = useMyLectureAction(list);


    return (
        <div className="my-lecture">
            <div className="my-lecture__header">
                <div className="my-lecture__info">
                    <span className="my-lecture__title">{config.title}</span>
                    <span className="my-lecture__description">
                        {config.descPrefix}
                        <span className="my-lecture__highlight">{config.highlight}</span>
                        {config.descSuffix}
                    </span>
                </div>
                <div className="my-lecture__count">
                    {config.countText(list)}
                </div>
            </div>

            <MyLectureTable
                list={list}
                buttonLabel={config.buttonLabel}
                onAction={handleAction}
                emptyRows={emptyRows}
            />
        </div>
    );
};

export default MyLectureList;