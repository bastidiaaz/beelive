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
  latitud: t.Number,
  longitud: t.Number
});

const formOptions = {
  fields: {
    nombre: {
      placeholder: "Ingresa un nombre para tu apiario"
    },
    descripcion: {
      placeholder: "Ingresa una descripcion para tu apiario"
    },
    latitud: {
      placeholder: "Ingresa la latitud de tu apiario"
    },
    longitud: {
      placeholder: "Ingresa la longitud de tu apiario"
    }
  }
}

class CreateApiaryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitEnabled: false
    };
  };


  formIsValid = () => {
    if (true) {
      this.setState({
        submitEnabled: false
      });
    } else {
      this.setState({
        submitEnabled: true
      });
    }
  }

  createApiary = () => {
    var newApiaryForm = this.refs.newApiary;
    var formIsValid = !newApiaryForm.validate().errors.length > 0;

    if (formIsValid) {
      var newApiaryValues = newApiaryForm.getValue();
      var newApiary = {
        name: newApiaryValues.nombre,
        description: newApiaryValues.descripcion,
        lat: newApiaryValues.latitud,
        long: newApiaryValues.longitud
      };

      this.props.createApiary(newApiary).then(() => {
        this.props.navigation.navigate('Apiaries');
      });
    } else {
      console.log('Form invalid');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
          <View style={{flex: 1}}>
            <Form ref="newApiary" type={Apiary} options={formOptions}/>
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
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { createApiary })(CreateApiaryScreen);
