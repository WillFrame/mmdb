import React from 'react';
import {Component} from './types';
import MaterialUiProvider from './components/material-ui';

const Providers: Component = ({children}) => {
    return (
        <div style={{height: '100vh'}}>
            <MaterialUiProvider>
                {children}
            </MaterialUiProvider>
        </div>
    );
};

export default Providers;
