import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';

import MainNavigation from './src/components/MainNavigation/MainNavigation';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    backgroundColor: '#FFA000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
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
          backgroundColor="#FF5722"
          animated={true}
        />
        <View style={styles.header}>
          <Text style={styles.title}>COLMENAS</Text>
        </View>
        <MainNavigation />
      </View>
    );
  }
}

AppRegistry.registerComponent('beelive', () => Main);

//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
