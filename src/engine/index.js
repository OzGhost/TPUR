import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer'
import { loadComboboxInput } from './action'

const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger())
)

window.onload = function() {
  console.warn('cout << onload event was fired!')
  store.dispatch(loadComboboxInput())
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('frame')
)
