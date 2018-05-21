import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer/navigationReducer';
import hivesReducer from './hivesReducer/hivesReducer';

const appReducer = combineReducers({
  nav: navigationReducer,
  hives: hivesReducer
});

export default appReducer;
