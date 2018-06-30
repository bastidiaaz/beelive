import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import t from 'tcomb-form-native';
import Button from '../../components/Button/Button';
import styles from './styles';

import { createApiary } from '../../reducers/apiariesReducer/apiariesActions';

import { connect } from 'react-redux';

const Form = t.form.Form;

const Apiary = t.struct({
  nombre: t.String,
  descripcion: t.String,
  direccion: t.String
});

const formOptions = {
  fields: {
    nombre: {
      placeholder: "Ingresa un nombre para tu apiario"
    },
    descripcion: {
      placeholder: "Ingresa una descripcion para tu apiario"
    },
    direccion: {
      placeholder: "Ingresa la direccion de tu apiario"
    },
  }
}

class CreateApiaryScreen extends React.Component {
  constructor(props) {
    super(props);
  };

  createApiary = () => {
    this.props.createApiary({
      key: "4",
      name: "FUNCIONO",
      status: "ASDF",
      population: "ASDFAFAD"
    });

    console.log('asdfads');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
          <View style={{flex: 1}}>
            <Form type={Apiary} options={formOptions}/>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button onPress={this.createApiary} text="CREAR APIARIO" />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: state.apiaries.data
});

export default connect(mapStateToProps, { createApiary })(CreateApiaryScreen);
