import React from 'react';
import DEFAULTS from '../../utils/constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  mapContainer: {
    marginBottom: 10,
    flex: 1,
    borderWidth: 2,
    borderColor: DEFAULTS.DIVIDER_COLOR
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
