import React from 'react';
import {
  AppRegistry,
  StatusBar,
  UIManager
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import appReducer from './src/reducers/appReducer';
import { middlewares } from './src/utils/redux';
import AppWithNavigationState from './src/components/AppNavigator/AppNavigator';

const store = createStore(appReducer, applyMiddleware(...middlewares));

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('beelive', () => Main);

export default Main;
//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
