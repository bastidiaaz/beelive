import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../utils/constants';

var styles = StyleSheet.create({
  tab: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    borderTopColor: DEFAULTS.DIVIDER_COLOR,
    borderTopWidth: 1,
  },
  tabIndicator: {
    backgroundColor: DEFAULTS.SECONDARY_COLOR,
    height: 5
  },
  icon: {
    fontSize: 22,
    color: '#FFF'
  },
  imageIcon: {
    marginTop: 4,
    height: 30,
    width: 30
  }
});

export default styles;
