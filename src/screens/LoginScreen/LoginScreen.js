import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Form from '../../components/Form/Form';

export default class LoginScreen extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC107',
  },
  welcomeTitleWrapper: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  subtitle: {
    color: '#FFECB3',
  }
})
