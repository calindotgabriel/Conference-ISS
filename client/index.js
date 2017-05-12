import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { IndexRoute } from 'react-router-dom';

import routes from './routes';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/SignupPage';
 
render((
  <Router>
    <div> 
        <Route path="/" component={App}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/greetings" component={Greetings}/>
      </div> 
  </Router>
), document.getElementById('app'));