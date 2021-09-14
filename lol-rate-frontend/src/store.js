import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk';
import champions from './reducers/champions'
import championFormData from './reducers/championFormData'
import championOwnerships from './reducers/championOwnerships'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
  //users: usersReducer,
  currentUser,
  loginForm,
  champions,
  championFormData,
  signupForm,
  championOwnerships
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store