import React, {FC} from 'react';
import Router from './modules/router';
import Providers from './modules/providers';
import 'normalize.css';

const App: FC = () => (
    <Providers>
        <Router />
    </Providers>
);

export default App;
