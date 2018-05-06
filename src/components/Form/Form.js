import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class Form extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Inicia sesión para continuar</Text>
        </View>
        <Text style={styles.label}>Email o nombre de usuario</Text>
        <TextInput
          underlineColorAndroid="#FFA000"
          style={styles.input}
        >

        </TextInput>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          underlineColorAndroid="#FFA000"
          secureTextEntry
          style={styles.input}
        >

        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={console.log('holas')}
        >
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
