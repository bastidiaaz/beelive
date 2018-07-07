import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../utils/constants';

var styles = StyleSheet.create({
  fabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: DEFAULTS.SECONDARY_COLOR,
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor: DEFAULTS.SECONDARY_BODER_COLOR
  },
  icon: {
    fontSize: 20,
    color: '#FFF'
  }
});

export default styles;
