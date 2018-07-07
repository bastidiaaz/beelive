import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../utils/constants';

var styles = StyleSheet.create({
  tab: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR
  },
  tabIndicator: {
    backgroundColor: DEFAULTS.SECONDARY_COLOR,
    height: 5
  },
  icon: {
    fontSize: 22,
    color: '#FFF'
  }
});

export default styles;
