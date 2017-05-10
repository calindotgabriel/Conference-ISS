import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';

export default (
    <Route path="/" component={App}>
        {/*<IndexRoute component={Greetings}  />*/}
    </Route>
)