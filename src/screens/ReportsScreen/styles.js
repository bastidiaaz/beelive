import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../utils/constants';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: DEFAULTS.SCREEN_CONTAINER_PADDING,
    flex: 1
  },
  dropdownContainer: {

  },
  label: {
    color: DEFAULTS.PRIMARY_COLOR_DARKEST,
    fontSize: DEFAULTS.LABEL_FONT_SIZE,
    fontWeight: DEFAULTS.LABEL_FONT_WEIGHT,
    marginBottom: DEFAULTS.LABEL_MARGIN_BOTTOM
  },
  picker: {
    flex: 1
  }
});

export default styles;
