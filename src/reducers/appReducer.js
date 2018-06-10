import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer/navigationReducer';
import apiariesReducer from './apiariesReducer/apiariesReducer';

const appReducer = combineReducers({
  nav: navigationReducer,
  apiaries: apiariesReducer
});

export default appReducer;
