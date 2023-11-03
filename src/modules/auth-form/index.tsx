import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {Component, FormValues} from './types';
import {TextFields} from '../../lib/text-fields';
import {HeaderWrapper, StyledArrowRight, StyledTypography, Wrapper, ButtonContainer} from './styles';
import {Button, Message, Typography} from '../../components/ui-kit';
import {InputElement} from '../../components';
import {DEFAULT_FORM_VALUES, VALIDATION_RULES} from './consts';
import {Routes} from '../../lib/consts/routes';
import {authUser} from './utils';

const AuthForm: Component = () => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState<boolean>(false);
    const {
        handleSubmit,
        control,
        reset,
        formState: {isValid},
    } = useForm<FormValues>({mode: 'onBlur'});

    const goRegistration = () => navigate(Routes.SIGNUP);

    const onSubmit = handleSubmit(async (values: FormValues) => {
        const user = await authUser(values);

        if (user) {
            reset(DEFAULT_FORM_VALUES);
            navigate(Routes.ROOT);
            return;
        }

        setIsError(true);
    });

    return (
        <form onSubmit={onSubmit}>
            <Wrapper>
                <HeaderWrapper>
                    <Typography variant="h5">
                        {TextFields.Entry}
                    </Typography>
                    <StyledTypography variant="caption" onClick={goRegistration}>
                        {TextFields.DoNotHaveAccount}
                        <StyledArrowRight />
                    </StyledTypography>
                </HeaderWrapper>
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
                <ButtonContainer>
                    <Button onClick={onSubmit} disabled={!isValid}>
                        {TextFields.Save}
                    </Button>
                    {isError && 
                    <Message>{TextFields.WrongUser}</Message>
                    }
                </ButtonContainer>
            </Wrapper>
        </form>
    );
};

export default AuthForm;
