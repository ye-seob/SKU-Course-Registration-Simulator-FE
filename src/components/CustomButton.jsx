import React from 'react';
import '../styles/customButton.css';


const Button = ({ text, onClick}) => {
    return (
        <button className="custom-button" onClick={onClick} >
            {text}
        </button>
    );
};

export default Button;
