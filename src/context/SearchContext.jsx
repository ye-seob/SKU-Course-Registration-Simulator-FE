import React, {createContext, useContext, useState} from 'react';

const SearchContext = createContext({
    searchKeyword: '',
    setSearchKeyword: () => {},
    currentSearchTerm: '',
    setCurrentSearchTerm: () => {},
});

export const SearchProvider = ({ children }) => {
    // 1. 입력 필드에 실시간으로 입력되는 키워드 상태
    const [searchKeyword, setSearchKeyword] = useState('');
    // 2. 검색 버튼 클릭 시 확정되어, 실제 API 요청에 사용되는 검색어 상태
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');

    const value = {
        searchKeyword,
        setSearchKeyword,
        currentSearchTerm,
        setCurrentSearchTerm,
    };

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    return useContext(SearchContext);
};
