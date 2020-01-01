import React from 'react';

import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => {
    return (
        <CustomButton {...props}>
            {children}
        </CustomButton>
    );
}

export default CustomButton;