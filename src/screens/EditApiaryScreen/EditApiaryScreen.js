import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import t from 'tcomb-form-native';
import Button from '../../components/Button/Button';
import styles from './styles';

const Form = t.form.Form;

const Apiary = t.struct({
  nombre: t.String,
  descripcion: t.String,
  direccion: t.String
});

class EditApiaryScreen extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {

    const defaultValues = {
      nombre: this.props.apiary.name,
      descripcion: this.props.apiary.status,
      direccion: this.props.apiary.population,
    };

    return(
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Form
            value={defaultValues}
            type={Apiary} />
        </View>
        <Button text="GUARDAR APIARIO" />
      </View>
        )
  }
}

export default EditApiaryScreen;
