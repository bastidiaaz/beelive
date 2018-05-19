import React from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    color: '#FFF',
    fontSize: 20
  },
  titleWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    color: '#FFECB3',
    marginBottom: 10
  },
  input: {
    color: '#FFF',
    marginBottom: 20,
    borderWidth: 0
  },
  button: {
    backgroundColor: "#448AFF",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#212121',
    shadowRadius: 25,
    shadowOffset: {height: 3, width: 3}
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles;
