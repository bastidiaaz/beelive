import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

//Import Screens
import HivesScreen from '../../screens/HivesScreen/HivesScreen';
import SummaryScreen from '../../screens/SummaryScreen/SummaryScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';

var routes = {
  SummaryScreen: {
    screen: SummaryScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="home" style={styles.icon}/>
    })
  },
  Hives: {
    screen: HivesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="forumbee" style={styles.icon}/>
    })
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="bar-chart" style={styles.icon}/>
    })
  }
}

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
}

export default TabNavigator(routes, options);
