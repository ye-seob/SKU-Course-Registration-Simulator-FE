import React from 'react';
import '../styles/Search.css';
import {useSearch} from '../context/SearchContext.jsx';

const Search = () => {
    const { searchKeyword, setSearchKeyword, setCurrentSearchTerm } = useSearch();


    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };


    const handleSearchClick = () => {
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
                    placeholder="교과목명 입력"
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
