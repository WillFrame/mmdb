import React, {FC} from 'react';
import AuthForm from '../../modules/auth-form';
import {Wrapper} from './styles';

const SignUp: FC = () => {
    return (
        <Wrapper>
            <AuthForm />
        </Wrapper>
    );
};

export default SignUp;
