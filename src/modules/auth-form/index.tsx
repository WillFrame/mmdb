import React from 'react';
import {Component, FormValues} from './types';
import Input from '../../components/ui-kit/input';
import {Controller, useForm} from 'react-hook-form';
import {Wrapper} from './styles';
import {TextFields} from '../../lib/text-fields';
import Button from '../../components/ui-kit/button';

const AuthForm: Component = ({onSubmitCallback}) => {
    const {handleSubmit, control} = useForm<FormValues>();

    const onSubmit = handleSubmit((values: FormValues) => (
        onSubmitCallback(values)
    ));

    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Controller
                    name="login"
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field}
                            label={TextFields.Login} 
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field}
                            label={TextFields.Password}
                        />
                    )}
                />
                <Button onClick={onSubmit}>
                    {TextFields.Save}
                </Button>
            </Wrapper>
        </form>
    );
};

export default AuthForm;
export {type FormValues};
