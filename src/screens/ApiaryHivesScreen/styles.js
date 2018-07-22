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
  }
});

export default styles;
