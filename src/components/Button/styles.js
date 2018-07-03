import React from 'react';
import DEFAULTS from '../../constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: DEFAULTS.PRIMARY_COLOR_DARKEST
  },
  text: {
    color: DEFAULTS.TEXT_COLOR_INVERSE,
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default styles;
