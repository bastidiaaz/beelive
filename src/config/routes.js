import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import SingleHiveScreen from '../screens/SingleHiveScreen/SingleHiveScreen';
import ApiariesScreen from '../screens/ApiariesScreen/ApiariesScreen';
import InspectionsScreen from '../screens/InspectionsScreen/InspectionsScreen';
import SummaryScreen from '../screens/SummaryScreen/SummaryScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

var styles = StyleSheet.create({
  icon: {
    fontSize: 22,
    color: '#FFF'
  }
});

var stackRoutes = {
  SingleHive: {
    screen: SingleHiveScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('apiary', null).name
    })
  }
};

var tabRoutes = {
  Apiaries: {
    screen: ApiariesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="forumbee" style={styles.icon}/>,
      title: "Apiarios"
    })
  },
  Inspections: {
    screen: InspectionsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="bar-chart" style={styles.icon}/>,
      title: "Inspecciones"
    })
  },
  Summary: {
    screen: SummaryScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="home" style={styles.icon}/>,
      title: "Resumen"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="home" style={styles.icon}/>
    })
  },
};

export { tabRoutes, stackRoutes };
