import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Component, FormValues} from './types';
import {TextFields} from '../../lib/text-fields';
import {Wrapper} from './styles';
import {Button, Typography} from '../../components/ui-kit';
import {InputElement} from '../../components';
import {DEFAULT_FORM_VALUES, VALIDATION_RULES} from './consts';
import {useNavigate} from 'react-router-dom';

const AuthForm: Component = () => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        reset,
        formState: {isValid},
    } = useForm<FormValues>();

    const onSubmit = handleSubmit((values: FormValues) => {
        // eslint-disable-next-line no-console
        console.log(values);
        reset(DEFAULT_FORM_VALUES);
        navigate('/sign-in');
    });

    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <Typography variant="h5">
                    {TextFields.Registration}
                </Typography>
                <Controller
                    name="login"
                    control={control}
                    rules={VALIDATION_RULES}
                    render={({field, formState: {errors}}) => (
                        <InputElement
                            {...field}
                            label={TextFields.Login}
                            errors={errors}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={VALIDATION_RULES}
                    render={({field, formState: {errors}}) => (
                        <InputElement
                            {...field}
                            type="password"
                            label={TextFields.Password}
                            errors={errors}
                        />
                    )}
                />
                <Button onClick={onSubmit} disabled={!isValid}>
                    {TextFields.Save}
                </Button>
            </Wrapper>
        </form>
    );
};

export default AuthForm;
