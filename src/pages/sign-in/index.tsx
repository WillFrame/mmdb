import React, {FC} from 'react';
import {StyledCard, Wrapper} from './styles';
import AuthForm from '../../modules/auth-form';

const SignIn: FC = () => (
    <Wrapper>
        <StyledCard>
            <AuthForm />
        </StyledCard>
    </Wrapper>
);

export default SignIn;
