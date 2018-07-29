import React from 'react';
import { StyleSheet } from 'react-native';
import DEFAULTS from '../../utils/constants';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: DEFAULTS.SCREEN_CONTAINER_PADDING,
    flex: 1
  },
  sectionContainer: {
    paddingBottom: DEFAULTS.SCREEN_SECCION_CONTAINER_PADDING,
  },
  label: {
    color: DEFAULTS.PRIMARY_COLOR_DARKEST,
    fontSize: DEFAULTS.LABEL_FONT_SIZE,
    fontWeight: DEFAULTS.LABEL_FONT_WEIGHT,
    marginBottom: DEFAULTS.LABEL_MARGIN_BOTTOM,
    textAlignVertical: 'center'
  },
  text: {
    color: DEFAULTS.PRIMARY_TEXT_COLOR,
    fontSize: DEFAULTS.LABEL_FONT_SIZE,
    marginBottom: DEFAULTS.LABEL_MARGIN_BOTTOM,
    textAlignVertical: 'center'
  },
  textMuted: {
    color: DEFAULTS.SECONDARY_TEXT_COLOR,
    fontSize: DEFAULTS.LABEL_FONT_SIZE,
    marginBottom: DEFAULTS.LABEL_MARGIN_BOTTOM,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  textMutedContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  picker: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1
  },
  inlineContainer: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

export default styles;
