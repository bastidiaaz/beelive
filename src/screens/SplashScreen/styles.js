import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC107'
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textShadowColor: '#FFA000',
    textShadowOffset:{width: 3, height: 3},
    textShadowRadius: 25,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  subtitle: {
    color: 'white'
  },
  subtitleWrapper: {
    paddingBottom: 20
  }
});


export default styles;
