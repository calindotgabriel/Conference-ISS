import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import routes from './routes';

import App from './components/App';

render((
  <Router >
        <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'));