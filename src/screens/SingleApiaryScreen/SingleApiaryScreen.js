import React from 'react';
import { TabNavigator } from 'react-navigation';
import { mapNavigationStateParamsToProps } from '../../utils/helpers.js';
import HivesScreen from '../../screens/HivesScreen/HivesScreen';
import styles from './styles';

var options = {
  initialRouteName: 'Hives',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: false,
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.routeName
  }),
  tabBarOptions: {
    showLabel: true,
    style: styles.tab,
    indicatorStyle: styles.tabIndicator
  }
};

var tabRoutes = {
  Hives: {
    screen: mapNavigationStateParamsToProps(HivesScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Colmenas"
    })
  }
};

export default SingleApiaryScreen = TabNavigator(tabRoutes, options);
