import React from 'react';
import DEFAULTS from '../../utils/constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: DEFAULTS.LIST_CONTAINER_PADDING,
    flex: 1
  },
  icon: {
    fontSize: 22,
    color: '#FFF'
  },
});

export default styles;
