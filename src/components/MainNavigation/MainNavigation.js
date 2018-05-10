import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HivesScreen from '../../screens/HivesScreen/HivesScreen';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';

var styles = StyleSheet.create({
  icon: {
    fontSize: 22,
    color: '#FFF'
  },
  tab: {
    backgroundColor: '#FFC107',
    borderTopColor: '#FFECB3',
    borderTopWidth: 1
  },
  tabIndicator: {
    backgroundColor: '#FF5722',
    height: 5
  }
})

var routes = {
  Hives: {
    screen: HivesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="cubes" style={styles.icon}/>
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="microphone" style={styles.icon}/>
    })
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="bar-chart" style={styles.icon}/>
    })
  }
}

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
}

export default TabNavigator(routes, options);
