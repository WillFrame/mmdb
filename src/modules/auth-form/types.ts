import {FC} from 'react';

export type FormValues = {
    login: string;
    password: string;
};

export type Props = {
    onSubmitCallback: (values: FormValues) => void;
};

export type Component = FC<Props>;
