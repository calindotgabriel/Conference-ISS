import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import PapersPage from './components/PapersPage';


export default (
    <div>
        <Route path="/" component={App}/>
        <Route path="/login" component={LoginPage} />
        <Route path="/papers" component={PapersPage} />
    </div>
)
