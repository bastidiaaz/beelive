import React from 'react';
import DEFAULTS from '../../constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: DEFAULTS.SECONDARY_COLOR,
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: DEFAULTS.PRIMARY_COLOR_DARK
  },
  text: {
    color: DEFAULTS.TEXT_COLOR_INVERSE,
    fontSize: 16
  }
});

export default styles;
