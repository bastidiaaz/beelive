import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../utils/constants';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
  },
  headerCombined: {
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    elevation: 0
  },
  headerIcon: {
    color: '#FFF',
    fontSize: 20,
    width: 25
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF'
  }
});

export default styles;
