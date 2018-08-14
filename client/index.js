import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { builderReducer } from './store/reducers/builder'
import App from './app'

const rootReducer = combineReducers({
  builder: builderReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleWare(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
