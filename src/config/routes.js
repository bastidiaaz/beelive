import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import SingleHiveScreen from '../screens/SingleHiveScreen/SingleHiveScreen';
import HivesScreen from '../screens/HivesScreen/HivesScreen';
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
  Colmena: {
    screen: SingleHiveScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('hive', null).name
    })
  }
};

var tabRoutes = {
  Colmenas: {
    screen: HivesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="forumbee" style={styles.icon}/>
    })
  },
  Inspecciones: {
    screen: InspectionsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="bar-chart" style={styles.icon}/>
    })
  },
  Resumen: {
    screen: SummaryScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="home" style={styles.icon}/>
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
