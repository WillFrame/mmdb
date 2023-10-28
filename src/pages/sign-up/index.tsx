import React, {FC} from 'react';
import AuthForm from '../../modules/registration-form';
import {StyledCard, Wrapper} from './styles';

const SignUp: FC = () => {
    return (
        <Wrapper>
            <StyledCard>
                <AuthForm />
            </StyledCard>
        </Wrapper>
    );
};

export default SignUp;
