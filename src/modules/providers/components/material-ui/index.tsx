import React, {PropsWithChildren, FC} from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {amber} from '@mui/material/colors';

const MaterialUiProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <ScopedCssBaseline
            sx={{
                bgcolor: amber[50],
                boxShadow: 1,
                minHeight: '100vh',
            }}
        >
            {children}
        </ScopedCssBaseline>
    );
};

export default MaterialUiProvider;
