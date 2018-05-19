import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    height: 47,
    width: 47,
  },
  icon: {
    fontSize: 40,
    color: '#757575'
  },
  badgeWrapper: {
    borderWidth: 2,
    borderColor: "#FFF",
    position:'absolute',
    right: 0,
    bottom: 0,
    minWidth:24,
    height:24,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#FFF'
  }
});

export default styles;
