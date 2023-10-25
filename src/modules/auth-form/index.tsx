import React from 'react';
import {Component, FormValues} from './types';
import Input from '../../lib/ui-kit/input';
import {Controller, useForm} from 'react-hook-form';
import {Wrapper} from './styles';
import {Button} from '@mui/material';
import {textField} from '../../lib/text-fields';

const AuthForm: Component = () => {
    const {handleSubmit, control} = useForm<FormValues>();

    const onSubmit = handleSubmit((values: FormValues) => {
        console.log(values);
    });

    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Controller
                    name="login"
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field}
                            label={textField.login} 
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({field}) => (
                        <Input
                            {...field}
                            label={textField.password}
                        />
                    )}
                />
            </Wrapper>
            <Button onClick={onSubmit}>Сохранить</Button>
        </form>
    );
};

export default AuthForm;
