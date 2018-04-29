import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Platform,
  StyleSheet,
  Text,
  UIManager,
  View
} from 'react-native';
import Drawer from './src/components/Drawer/Drawer';

export default class Main extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
}

AppRegistry.registerComponent('beelive', () => Main);

//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
