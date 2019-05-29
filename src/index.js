import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'

const store = configureStore()

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
)
