import React from 'react';
import DEFAULTS from '../../constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    borderColor: DEFAULTS.PRIMARY_BORDER_COLOR,
    borderWidth: 1,
    height: 50,
  },
  text: {
    color: DEFAULTS.TEXT_COLOR_INVERSE,
    fontSize: 18
  }
});

export default styles;
