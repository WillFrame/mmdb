import styled from '@emotion/styled';
import {Card} from '../../components/ui-kit';
import {indigo} from '@mui/material/colors';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: ${indigo[50]};
    width: 50%;
    min-width: 280px;
    max-width: 600px;
    padding: 24px 32px;
`;
