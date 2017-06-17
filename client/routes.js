import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';


export default (
    <div>
        <Route path="/" component={App}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/greetings" component={Greetings}/>
        <Route path="/login" component={LoginPage} />
    </div>
)
