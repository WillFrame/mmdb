import {RouterProvider} from "react-router-dom";
import React, { FC } from "react";
import { ROUTER } from './consts';

const Router: FC = () => (
    <RouterProvider router={ROUTER} />
);

export default Router;
