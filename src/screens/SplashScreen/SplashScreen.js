import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import styles from './styles';

class SplashScreen extends React.Component {
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

export default SplashScreen;
