import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk';
import champions from './reducers/champions'
import championFormData from './reducers/championFormData'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
  currentUser,
  loginForm,
  champions,
  championFormData,
  signupForm,

});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store