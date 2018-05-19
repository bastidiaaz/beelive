import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import HivesScreen from '../screens/HivesScreen/HivesScreen';
import InspectionsScreen from '../screens/InspectionsScreen/InspectionsScreen';
import SummaryScreen from '../screens/SummaryScreen/SummaryScreen';

var styles = StyleSheet.create({
  icon: {
    fontSize: 22,
    color: '#FFF'
  }
});

var routes = {
  Hives: {
    screen: HivesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="forumbee" style={styles.icon}/>
    })
  },
  Inspections: {
    screen: InspectionsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="bar-chart" style={styles.icon}/>
    })
  },
  Summary: {
    screen: SummaryScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="home" style={styles.icon}/>
    })
  },
}

export default routes;
