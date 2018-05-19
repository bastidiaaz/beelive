import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../components/AppNavigator/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init(), null);

function nav(state = initialNavState, action) {
  return AppNavigator.router.getStateForAction(action, state) || state;
}

const AppReducer = combineReducers({
  nav
});

export default AppReducer;
