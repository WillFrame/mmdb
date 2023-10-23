import React from 'react';
import { Component } from './types';
import MaterialUiProvider from './components/material-ui';

const Providers: Component = ({children}) => {
    return (
        <MaterialUiProvider>
            {children}
        </MaterialUiProvider>
    );
};

export default Providers;