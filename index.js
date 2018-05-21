import React from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  UIManager,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import appReducer from './src/reducers/appReducer';
import { middlewares } from './src/utils/redux';
import AppWithNavigationState from './src/components/AppNavigator/AppNavigator';

const store = createStore(appReducer, applyMiddleware(...middlewares));

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    backgroundColor: '#FFC107',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  }
});

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#FFA000" animated={true} />
          <View style={styles.header}>
            <Text style={styles.title}>Beelive</Text>
          </View>
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('beelive', () => Main);

export default Main;
//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
