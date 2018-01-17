import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { IndexRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import NavigationBar from './components/NavigationBar';

import PeopleList from './components/PeopleList';


const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

render((
  <Provider store={store}>
    <Router>
      <div>
          <Route path="/" component={App}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/greetings" component={Greetings}/>
          <Route path="/test" component={PeopleList} />
        </div> 
    </Router>
  </Provider>
), document.getElementById('app'));