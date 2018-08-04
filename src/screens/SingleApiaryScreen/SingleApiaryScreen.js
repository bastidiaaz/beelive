import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    tabStyle: {
      flexDirection: 'row',
    },
    labelStyle: {
      textAlignVertical: 'top'
    },
    showIcon: true,
    showLabel: true,
    style: styles.tab,
    indicatorStyle: styles.tabIndicator
  }
};

var tabRoutes = {
  Info: {
    screen: mapNavigationStateParamsToProps(ApiaryInfoScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Informacion",
      tabBarIcon: () => <Icon style={styles.icon} name="info"/>,
    })
  },
  Hives: {
    screen: mapNavigationStateParamsToProps(ApiaryHivesScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Colmenas",
      tabBarIcon: () => <Icon style={styles.icon} name="forumbee"/>,
    })
  }
};

export default SingleApiaryScreen = TabNavigator(tabRoutes, options);
