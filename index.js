import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';

import MainNavigation from './src/components/MainNavigation/MainNavigation';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFECB3'
  },
  statusBar: {
    backgroundColor: '#FFA000'
  }
});

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {screen: 0}
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#FFA000"
          animated={true}
        />
        <MainNavigation />
      </View>
    );
  }
}

AppRegistry.registerComponent('beelive', () => Main);

//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
