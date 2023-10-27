import React, {FC} from 'react';
import AuthForm, {FormValues} from '../../modules/auth-form';
import {StyledCard, Wrapper} from './styles';
import {Typography} from '@mui/material';
import {TextFields} from '../../lib/text-fields';

const SignUp: FC = () => {
    const onSubmit = (values: FormValues) => console.log(values);

    return (
        <Wrapper>
            <StyledCard>
                <Typography variant="h5">
                    {TextFields.Registration}
                </Typography>
                <AuthForm onSubmitCallback={onSubmit} />
            </StyledCard>
        </Wrapper>
    );
};

export default SignUp;
