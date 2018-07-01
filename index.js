import React from 'react';
import { AsyncStorage, YellowBox } from 'react-native';
import {
  AppRegistry,
  StatusBar,
  UIManager
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import appReducer from './src/reducers/appReducer';
import { middlewares } from './src/utils/redux';
import StackNav from './src/components/StackNav/StackNav';

const store = createStore(appReducer, applyMiddleware(...middlewares));


class Main extends React.Component {
  async componentDidMount() {
    await AsyncStorage.getItem('apiaries', (err, apiaries) => {
    });
  }

  render() {
    return (
      <Provider store={store}>
        <StackNav />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('beelive', () => Main);

export default Main;


//Ignore listed warnings
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
  'Module RCTImageLoader'
]);

//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
