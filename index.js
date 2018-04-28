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
import {
  COLOR,
  ThemeProvider
} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class Main extends React.Component {
    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
              <SidePanel  />
            </ThemeProvider>
        );
    }
}

AppRegistry.registerComponent('beelive', () => Main);

//Activate animations
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
