import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#FFC107',
    alignItems: 'center'
  },
  label: {
    color: '#FFF',
    fontSize: 15
  },
  badgeWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeContainer: {
    backgroundColor: '#FF5722',
    marginRight: 10
  }
});

export default styles;
