import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Beelive App</Text>
        </View>
        <View style={styles.subtitleWrapper}>
          <Text style={styles.subtitle}>By Bastian Diaz</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
