import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TabNavigator } from 'react-navigation';
import ApiariesScreen from '../../screens/ApiariesScreen/ApiariesScreen';
import styles from './styles';

var options = {
  initialRouteName: 'Apiaries',
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

var tabRoutes = {
  Apiaries: {
    screen: ApiariesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="forumbee" style={styles.icon}/>,
      title: "Apiarios"
    })
  }
};

export default MainScreen = TabNavigator(tabRoutes, options);
