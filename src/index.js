import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './ui/App'
// import rootReducer from './reducers'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './ui/reducers'; // need to create

import { BrowserRouter, Route } from 'react-router-dom';
import UserRoutes from './Router/userRoutes/index'
const store = createStore(appReducer, applyMiddleware(thunk));



render(
  <Provider store={store}>
    <UserRoutes />
  </Provider>,
  document.getElementById('root')
)
