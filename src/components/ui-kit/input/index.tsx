import React, {memo} from 'react';
import {Component, Props} from './types';
import {TextField} from '@mui/material';

const Input: Component = ({
    variant = 'outlined',
    size = 'small',
    ...props
}) => (
    <TextField
        {...props}
        size={size}
        variant={variant}
    />
);

export default memo(Input);
export {type Props};
