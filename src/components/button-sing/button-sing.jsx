import React from 'react';
import './button-sing.scss';

const buttonSign = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}> 
        {children}
    </button>
)

export default buttonSign;
