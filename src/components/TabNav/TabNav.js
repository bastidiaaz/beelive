import React from 'react';
import { TabNavigator } from 'react-navigation';

import styles from './styles';
import routes from '../../config/routes';

var options = {
  initialRouteName: 'Colmenas',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: false,
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.routeName
  }),
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: styles.tab,
    indicatorStyle: styles.tabIndicator
  }
};

export default TabNavElement = TabNavigator(routes, options);
