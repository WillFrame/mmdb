import styled from '@emotion/styled';
import {Typography} from '../../components/ui-kit';
import {ArrowRightAlt} from '@mui/icons-material';
import {blue} from '@mui/material/colors';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledTypography = styled(Typography)`
    display: flex;
    gap: 4px;
    height: min-content;
    align-items: center;
    transition: .3s;
    &:hover {
        cursor: pointer;
        color: ${blue[500]}
    }
`;

export const StyledArrowRight = styled(ArrowRightAlt)`
    font-size: 1.5em;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
