import React from 'react';
import {Component, Props} from './types';
import {ErrorMessage, Input} from '../ui-kit';
import {Wrapper} from './styles';

const InputElement: Component = ({
    name,
    errors,
    ...props
}) => (
    <Wrapper>
        <Input {...props} name={name} />
        {name && errors && <ErrorMessage name={name} errors={errors} />}
    </Wrapper>
);

export default InputElement;
export {type Props};
