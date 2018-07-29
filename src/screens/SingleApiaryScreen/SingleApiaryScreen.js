import React from 'react';
import { TabNavigator } from 'react-navigation';
import { mapNavigationStateParamsToProps } from '../../utils/helpers.js';
import { deleteApiary } from '../../reducers/apiariesReducer/apiariesActions';
import ApiaryHivesScreen from '../../screens/ApiaryHivesScreen/ApiaryHivesScreen';
import ApiaryInfoScreen from '../../screens/ApiaryInfoScreen/ApiaryInfoScreen';
import styles from './styles';

var options = {
  initialRouteName: 'Info',
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
  Info: {
    screen: mapNavigationStateParamsToProps(ApiaryInfoScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Info"
    }),
    onTransitionEnd: ({ navigation }) => {
    }
  },
  Hives: {
    screen: mapNavigationStateParamsToProps(ApiaryHivesScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Colmenas"
    })
  }
};

export default SingleApiaryScreen = TabNavigator(tabRoutes, options);
