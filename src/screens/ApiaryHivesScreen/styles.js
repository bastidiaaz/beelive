import React from 'react';
import DEFAULTS from '../../utils/constants';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: DEFAULTS.LIST_CONTAINER_PADDING,
    flex: 1
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem: {
    height: 50,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemIcon: {
    fontSize: 20,
    marginRight: 40
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
    justifyContent: 'center',
    padding: DEFAULTS.SCREEN_CONTAINER_PADDING
  },
  icon: {
    fontSize: 22,
    color: '#FFF'
  },
});

export default styles;
