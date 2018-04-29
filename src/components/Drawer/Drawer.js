import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';


export default DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    }
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: '#476DC5'
  }
);
