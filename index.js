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
import TabNav from './src/components/TabNavElement/TabNavElement';

const store = createStore(appReducer, applyMiddleware(...middlewares));

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNav />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('beelive', () => Main);

export default Main;
//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
