import {FC} from 'react';
import {ErrorMessageProps, InputProps} from '../ui-kit';

export type Props = InputProps & Partial<ErrorMessageProps>;

export type Component = FC<Props>;
