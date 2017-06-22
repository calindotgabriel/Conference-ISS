import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IndexRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import routes from './routes';
 
const store = createStore(
   state => state,
   compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
 );


render((
  <Provider store={store}>
    <BrowserRouter>
        {routes}
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));