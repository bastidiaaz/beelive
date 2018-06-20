import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../constants';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF'
  }
});

export default styles;
