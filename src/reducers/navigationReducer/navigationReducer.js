import { NavigationActions } from 'react-navigation';
import { StackNavElement } from '../../components/StackNav/StackNav';

const initialNavState = StackNavElement.router.getStateForAction(NavigationActions.init(), null);

function navigationReducer(state = initialNavState, action) {
  switch (action.type) {
    default:
      return StackNavElement.router.getStateForAction(action, state) || state;
  }
}

export default navigationReducer;
