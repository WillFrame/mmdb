import React, {FC} from 'react';
import RegistrationForm from '../../modules/registration-form';
import {StyledCard, Wrapper} from './styles';

const SignUp: FC = () => (
    <Wrapper>
        <StyledCard>
            <RegistrationForm />
        </StyledCard>
    </Wrapper>
);

export default SignUp;
