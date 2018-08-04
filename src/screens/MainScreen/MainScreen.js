import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { TabNavigator } from 'react-navigation';
import ApiariesScreen from '../../screens/ApiariesScreen/ApiariesScreen';
import ReportsScreen from '../../screens/ReportsScreen/ReportsScreen';
import apiary from  '../../../assets/images/apiary_icon.png';
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
    showLabel: true,
    tabStyle: {
      flexDirection: 'row',
    },
    labelStyle: {
      textAlignVertical: 'top'
    },
    style: styles.tab,
    indicatorStyle: styles.tabIndicator
  }
};

var tabRoutes = {
  Apiaries: {
    screen: ApiariesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Image style={styles.imageIcon} source={apiary} />,
      title: "Apiarios"
    })
  },
  Reports: {
    screen: ReportsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="file-text" style={styles.icon}/>,
      title: "Reportes"
    })
  }
};

export default MainScreen = TabNavigator(tabRoutes, options);
