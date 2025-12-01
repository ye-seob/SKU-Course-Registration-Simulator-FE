import React from 'react';
import '../styles/customButton.css';


const Button = ({ children, onClick, ...rest }) => {
    return (
        <button className="custom-button" onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default Button;
