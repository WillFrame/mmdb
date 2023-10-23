import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Routes} from '../../lib/consts/routes';
import MainPage from '../../pages/main-page';
import Profile from '../../pages/profile';

export const ROUTER = createBrowserRouter([
    {
        path: Routes.ROOT,
        element: <MainPage />,
    },
    {
        path: Routes.PROFILE,
        element: <Profile />,
    },
]);
