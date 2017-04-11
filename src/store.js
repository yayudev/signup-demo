import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { signupReducer } from './reducers'

let windowGlobal

if (typeof(window) !== 'undefined')
  windowGlobal = window

const middleware = [
  thunk
]

const reducer = combineReducers({
  form: formReducer,
  signup: signupReducer
})

const composeEnhancers = (windowGlobal && windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const storeEnhancers = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(reducer, storeEnhancers)
