import {Card as MaterialCard} from '@mui/material';
import {Component, Props} from './types';

const Card: Component = ({
    variant = 'outlined',
    ...props
}) => (
    <MaterialCard
        variant={variant}
        {...props}
    />
);

export default Card;
export {type Props};
