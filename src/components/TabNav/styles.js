import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../constants';

var styles = StyleSheet.create({
  tab: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    borderTopColor: DEFAULTS.DIVIDER_COLOR,
    borderTopWidth: 1
  },
  tabIndicator: {
    backgroundColor: DEFAULTS.SECONDARY_COLOR,
    height: 5
  }
});

export default styles;
