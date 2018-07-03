import React from 'react';
import DEFAULTS from '../../constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
  },
  formContainer: {
    padding: DEFAULTS.SCREEN_CONTAINER_PADDING,
    marginTop: DEFAULTS.SCREEN_CONTAINER_PADDING,
    paddingTop: 0,
    flex: 1
  },
  label: {
    color: DEFAULTS.PRIMARY_COLOR_DARKEST,
    fontSize: DEFAULTS.LABEL_FONT_SIZE,
    fontWeight: DEFAULTS.LABEL_FONT_WEIGHT,
    marginBottom: DEFAULTS.LABEL_MARGIN_BOTTOM
  },
  footer: {
    borderTopColor: DEFAULTS.DIVIDER_COLOR,
    backgroundColor: DEFAULTS.PRIMARY_COLOR,
    padding: 15,
    paddingHorizontal: 40
  },
  mapContainer: {
    height: 330,
    width: 400,
    marginBottom: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default styles;
