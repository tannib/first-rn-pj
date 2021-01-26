import React from 'react'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(reducer, devToolsEnhancer())

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper
