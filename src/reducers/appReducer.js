import { combineReducers } from 'redux';
import navigationReducer from './navigationReducer/navigationReducer';

const appReducer = combineReducers({
  navigationReducer
});

export default appReducer;
