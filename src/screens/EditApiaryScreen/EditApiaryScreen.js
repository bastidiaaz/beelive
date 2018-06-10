import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import t from 'tcomb-form-native';
import styles from './styles';

const Form = t.form.Form;

const Apiary = t.struct({
  name: t.String,
  description: t.String,
  address: t.String
});

class EditApiaryScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Form type={Apiary} />
      </View>
    )
  }
}

export default EditApiaryScreen;
