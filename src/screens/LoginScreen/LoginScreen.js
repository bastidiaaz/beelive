import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import styles from './styles';
import Form from '../../components/Form/Form';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeTitleWrapper}>
          <Text style={styles.title}>Hola gatitassss!</Text>
        </View>
        <Form />
      </View>
    );
  }
}

export default LoginScreen;
