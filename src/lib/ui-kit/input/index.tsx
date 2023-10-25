import React, {memo} from 'react';
import {Component} from './types';
import {TextField} from '@mui/material';

const Input: Component = ({
    variant = 'outlined',
    ...props
}) => (
    <TextField
        {...props}
        variant={variant}
    />
);

export default memo(Input);
