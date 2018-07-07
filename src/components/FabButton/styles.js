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
    bottom: 15,
    right: 15,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor: DEFAULTS.SECONDARY_BODER_COLOR,
    elevation: 4
  },
  icon: {
    fontSize: 20,
    color: '#FFF'
  }
});

export default styles;
