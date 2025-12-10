import React from 'react';
import '../styles/Search.css';
import {useSearch} from '../context/SearchContext.jsx';
import useSearchStore from "../store/searchStore.js";

const Search = () => {
    const { searchKeyword, setSearchKeyword, setCurrentSearchTerm } = useSearch();
    const {setMajor , setType }  = useSearchStore();

    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };


    const handleSearchClick = () => {
        setMajor("");
        setType("");
        setCurrentSearchTerm(searchKeyword);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };


    return (
        <div className="search-container">
            <span className="search-label">
                교과목명으로 검색
            </span>
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
