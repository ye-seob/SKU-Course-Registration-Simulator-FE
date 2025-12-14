import React from "react";
import "../styles/WarningNotice.css";
import useViewStore from "../store/viewStore.js";

const WarningNotice = () => {
    const { setMode } = useViewStore();

    const handleGoToCart = () => {
        setMode("CART");
    };

    return (
        <div className="course-warning-wrapper">
            <div className="warning-title-box">
                <p>[장바구니 하러가기]</p>
            </div>

            <div className="warningInfo-text">
                <button
                    className="go-cart-btn"
                    onClick={handleGoToCart}
                >
                    이동
                </button>
            </div>
        </div>
    );
};

export default WarningNotice;