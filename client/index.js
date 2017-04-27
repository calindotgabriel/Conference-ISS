import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import App from './components/App';

render((
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
), document.getElementById('app'));