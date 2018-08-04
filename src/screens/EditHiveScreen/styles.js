import React from 'react';
import DEFAULTS from '../../utils/constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: DEFAULTS.SCREEN_CONTAINER_PADDING,
  },
  formContainer: {
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
