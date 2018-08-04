import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer/navigationReducer';
import apiariesReducer from './apiariesReducer/apiariesReducer';
import hivesReducer from './hivesReducer/hivesReducer';
import reportsReducer from './reportsReducer/reportsReducer';

const appReducer = combineReducers({
  reports: reportsReducer,
  nav: navigationReducer,
  apiaries: apiariesReducer,
  hives: hivesReducer,
});

export default appReducer;
