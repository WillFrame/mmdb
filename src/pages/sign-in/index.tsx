import React, {FC} from 'react';
import {StyledCard, Wrapper} from './styles';
import AuthForm from '../../modules/auth-form';

// return axios.get<ITransfersDto[]>('/mock/transfers.json').then((data) => {
//     return data;
// });

const SignIn: FC = () => (
    <Wrapper>
        <StyledCard>
            <AuthForm />
        </StyledCard>
    </Wrapper>
);

export default SignIn;
