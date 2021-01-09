import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    const customClass = isGoogleSignIn ? 'google-sign-in' : (inverted ? 'inverted' : '');

    return (
        <button className={`${customClass} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;