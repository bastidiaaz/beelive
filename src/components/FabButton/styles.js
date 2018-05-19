import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  fabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF5722',
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)'
  },
  icon: {
    fontSize: 20,
    color: '#FFF'
  }
});

export default styles;
