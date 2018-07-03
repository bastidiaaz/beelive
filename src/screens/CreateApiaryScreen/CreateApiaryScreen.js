import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import t from 'tcomb-form-native';

import { createApiary } from '../../reducers/apiariesReducer/apiariesActions';
import { connect } from 'react-redux';

import Button from '../../components/Button/Button';
import styles from './styles';

const Form = t.form.Form;
const Apiary = t.struct({
  nombre: t.String,
  descripcion: t.String
});
const formOptions = {
  fields: {
    nombre: {
      placeholder: "Ingresa un nombre para tu apiario"
    },
    descripcion: {
      placeholder: "Ingresa una descripcion para tu apiario"
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
          <View>
            <Form ref="newApiary" type={Apiary} options={formOptions}/>
          </View>
          <Text style={styles.label}>Ubicación</Text>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <Button onPress={this.createApiary} text="CREAR APIARIO" />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { createApiary })(CreateApiaryScreen);
