import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { signupReducer } from './reducers'


// Workaround to allow the window to exist while SSR'ing
const windowGlobal = typeof(window) !== 'undefined' ? window : null


// Setup reducers
const reducer = combineReducers({
  form: formReducer,
  signup: signupReducer
})


// Setup middleware
const composeEnhancers =
  (windowGlobal && windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const storeEnhancers = composeEnhancers(
  applyMiddleware(thunk)
)


export const store = createStore(reducer, storeEnhancers)
