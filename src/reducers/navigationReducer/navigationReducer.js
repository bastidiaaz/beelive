import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../components/AppNavigator/AppNavigator';

const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init(), null);

function navigationReducer(state = initialNavState, action) {
  switch (action.type) {
    default:
      return AppNavigator.router.getStateForAction(action, state) || state;
  }
}

export default navigationReducer;
