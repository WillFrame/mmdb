import React, { PropsWithChildren, FC } from 'react';
import { ScopedCssBaseline } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const MaterialUiProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <ScopedCssBaseline enableColorScheme={false}>
            {children}
        </ScopedCssBaseline>
    );
};

export default MaterialUiProvider;
