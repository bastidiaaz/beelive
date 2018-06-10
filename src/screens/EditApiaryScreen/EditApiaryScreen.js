import React from 'react';
import PropTypes from 'prop-types';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import styles from './styles';

class EditApiaryScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  _validateText = (text) => {
    console.log(text);
  };

  render() {
    return(
      <View style={styles.container}>
        <FormLabel>Nombre</FormLabel>
        <FormInput onChange={this._validateText()}/>
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    )
  }
}

export default EditApiaryScreen;
