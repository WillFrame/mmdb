import {createBrowserRouter} from 'react-router-dom';
import {Routes} from '../../lib/consts/routes';
import MainPage from '../../pages/main-page';
import Profile from '../../pages/profile';
import SignIn from '../../pages/sign-in';
import SignUp from '../../pages/sign-up';

export const ROUTER = createBrowserRouter([
    {
        path: Routes.ROOT,
        element: <MainPage />,
    },
    {
        path: Routes.PROFILE,
        element: <Profile />,
    },
    {
        path: Routes.SIGNIN,
        element: <SignIn />,
    },
    {
        path: Routes.SIGNUP,
        element: <SignUp />,
    },
]);
