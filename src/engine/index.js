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

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('frame')
  )

  /*
  window.TPUR.config.comboboxInfoURI = window.comboboxLink
  window.TPUR.config.calculatorURI = window.calculationLink
  */
  store.dispatch(loadComboboxInput())
}

