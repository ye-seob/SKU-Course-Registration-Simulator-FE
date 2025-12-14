import React, {useState} from 'react';
import '../styles/Search.css';
import useSearchStore from "../store/searchStore.js";
import useLectureStore from "../store/lectureStore.js";
import {getLectures} from "../api/getLectures.js";

const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const { setMajor, setType, setKeyword } = useSearchStore();
    const { setLectures } = useLectureStore();

    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearchClick = async () => {
        setMajor("");
        setType("");
        setKeyword(searchKeyword);

        try {
            await getLectures(searchKeyword, "", "", setLectures);
        } catch (err) {
            console.error("검색 실패", err);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };

    return (
        <div className="search-container">
            <span className="search-label">교과목명으로 검색</span>
            <div className="search-input-group">
                <input
                    type="text"
                    className="search-input"
                    value={searchKeyword}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="search-button"
                    onClick={handleSearchClick}
                >
                    검색
                </button>
            </div>
        </div>
    );
};

export default Search;