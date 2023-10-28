import React from 'react';
import {ErrorMessage as FormErrorMessage} from '@hookform/error-message';
import {Component, Props} from './types';
import {Message} from './styles';
import {isEmpty} from '../../../lib/utils/is-empty';

const ErrorMessages: Component = ({
    errors,
    ...props
}) => {
    if (!isEmpty(errors)) {
        return null;
    }
    
    return (
        <FormErrorMessage
            {...props}
            errors={errors}
            render={({message}) => (
                <Message>{message}</Message>
            )}
        />
    );
};

export default ErrorMessages;
export {type Props};
