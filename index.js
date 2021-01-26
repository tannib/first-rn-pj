import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { Provider } from 'react-redux'
import { name as appName } from './app.json'
import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducer from './store/reducer'

const store = createStore(reducer, devToolsEnhancer())

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux)
