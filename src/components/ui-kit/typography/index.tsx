import React from 'react';
import {Component, Props} from './types';
import {Typography as MaterialTypography} from '@mui/material';

const Typography: Component = ({
    children,
    ...props
}) => (
    <MaterialTypography {...props}>
        {children}
    </MaterialTypography>
);

export default Typography;
export {type Props};

