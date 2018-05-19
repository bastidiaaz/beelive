import React from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  UIManager,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import routes from './src/screens/routes';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  tab: {
    backgroundColor: '#FFC107',
    borderTopColor: '#FFECB3',
    borderTopWidth: 1
  },
  tabIndicator: {
    backgroundColor: '#FF5722',
    height: 5
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

var options = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: false,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: styles.tab,
    indicatorStyle: styles.tabIndicator
  }
};

var TabNav = TabNavigator(routes, options);

class Main extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFA000" animated={true} />
        <View style={styles.header}>
          <Text style={styles.title}>COLMENAS</Text>
        </View>
        <TabNav />
      </View>
    );
  }
}

export default Main;

AppRegistry.registerComponent('beelive', () => Main);

//Activate animations
// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
