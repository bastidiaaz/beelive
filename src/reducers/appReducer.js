import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer/navigationReducer';
import apiariesReducer from './apiariesReducer/apiariesReducer';
import hivesReducer from './hivesReducer/hivesReducer';

const appReducer = combineReducers({
  nav: navigationReducer,
  apiaries: apiariesReducer,
  hives: hivesReducer
});

export default appReducer;
