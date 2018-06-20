import React from 'react';
import DEFAULTS from '../../constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  formContainer: {
    padding: DEFAULTS.SCREEN_CONTAINER_PADDING,
    marginTop: DEFAULTS.SCREEN_CONTAINER_PADDING,
    paddingTop: 0,
    flex: 1
  },
  footer: {
    borderTopColor: DEFAULTS.DIVIDER_COLOR,
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    padding: 15,
    paddingHorizontal: 40
  }
});

export default styles;
