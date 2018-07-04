import React from 'react';
import DEFAULTS from '../../constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  mapContainer: {
    height: 330,
    width: 'auto',
    marginBottom: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    position: 'absolute',
    height: 48,
    width: 48,
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    top: '50%'
  }
});

export default styles;
