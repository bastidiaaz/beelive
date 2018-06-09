import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    backgroundColor: '#FFC107',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  },
  tab: {
    backgroundColor: '#FFC107',
    borderTopColor: '#FFECB3',
    borderTopWidth: 1
  },
  tabIndicator: {
    backgroundColor: '#FF5722',
    height: 5
  }
});

export default styles;
