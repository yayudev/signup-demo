import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { signupReducer } from './reducers'

const middleware = [
  thunk
]

const reducer = combineReducers({
  form: formReducer,
  signup: signupReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancers = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(reducer, storeEnhancers)
