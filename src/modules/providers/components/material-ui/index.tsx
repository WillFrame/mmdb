import React, {PropsWithChildren, FC} from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {amber} from '@mui/material/colors';
import {ThemeProvider, createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#972e0e',
        },
        secondary: {
            main: '#00544a',
        },
    },
});

const MaterialUiProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <ScopedCssBaseline
                sx={{
                    bgcolor: amber[50],
                    boxShadow: 1,
                    minHeight: '100vh',
                }}
            >
                {children}
            </ScopedCssBaseline>
        </ThemeProvider>
    );
};

export default MaterialUiProvider;
