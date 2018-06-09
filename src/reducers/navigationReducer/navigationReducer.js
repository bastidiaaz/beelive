import { NavigationActions } from 'react-navigation';
import { TabNavElement } from '../../components/TabNavElement/TabNavElement';

const initialNavState = TabNavElement.router.getStateForAction(NavigationActions.init(), null);

function navigationReducer(state = initialNavState, action) {
  switch (action.type) {
    default:
      return TabNavElement.router.getStateForAction(action, state) || state;
  }
}

export default navigationReducer;
