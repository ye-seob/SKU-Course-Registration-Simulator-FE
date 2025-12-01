import React from 'react';
import '../styles/Search.css';

const Search = () => (
    <div className="search-container">
        <span className="search-label">
            교과목명으로 검색
        </span>
        <div className="search-input-group">
            <input
                type="text"
                placeholder=""
                className="search-input"
            />
            <button className="search-button">
                검색
            </button>
        </div>
    </div>
);

export default Search;
