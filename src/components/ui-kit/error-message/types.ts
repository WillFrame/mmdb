import {FC} from 'react';

export type Props = {
    name: string;
    errors: object;
};

export type Component = FC<Props>;
