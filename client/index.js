import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IndexRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import routes from './routes';
 
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

render((
  <Provider store={store}>
    <BrowserRouter>
        {routes}
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));