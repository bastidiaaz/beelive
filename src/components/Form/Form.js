import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import styles from './styles';

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
