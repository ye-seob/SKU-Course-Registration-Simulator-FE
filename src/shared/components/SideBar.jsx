import React from 'react';
import UserInfo from '../../features/user/components/UserInfo.jsx';
import '../styles/SideBar.css';
import Search from "../../features/search/components/Search.jsx";
import Logout from "../../features/user/components/Logout.jsx";
import useUserStore from "../../features/user/store/userStore.js";
import useSearchStore from "../../features/search/store/searchStore.js";
import ButtonSection from "./ ButtonSection.jsx";

const SideBar = ({onRefresh}) => {
    const { user } = useUserStore();
    const { setMajor, setType, setIsCart , setKeyword} = useSearchStore();
    const logoUrl = "/image/logo.gif";


    const handleClick = async (newMajor, newType, cart = false) => {

        setMajor(newMajor);
        setKeyword("");
        setType(newType);
        setIsCart(cart);

        onRefresh();
    }

        return (
        <div className="sidebar">
            <img
                src={logoUrl}
                alt="서경대학교 로고"
                className="logo-image"
            />
            <UserInfo />
            <ButtonSection user={user} onNavigate={handleClick}/>
            <Search />
            <Logout />
        </div>
    );
};

export default SideBar;