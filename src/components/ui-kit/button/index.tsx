import {Button as MaterialButton} from '@mui/material';
import React from 'react';
import {Component, Props} from './types';

const Button: Component = ({
    variant = 'contained',
    ...props
}) => (
    <MaterialButton
        variant={variant}
        {...props}
    />
);

export default Button;
export {type Props};
