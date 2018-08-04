import React from 'react';
import {
  Button,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import t from 'tcomb-form-native';
import DEFAULTS from '../../utils/constants';
import { createApiary } from '../../reducers/apiariesReducer/apiariesActions';
import { connect } from 'react-redux';
import MapPointSelector from '../../components/MapPointSelector/MapPointSelector';
import styles from './styles';

const Form = t.form.Form;
const Apiary = t.struct({
  name: t.String,
  description: t.maybe(t.String)
});
const formOptions = {
  fields: {
    name: {
      label: 'Nombre *',
      placeholder: 'Ingresa un nombre para tu apiario'
    },
    description: {
      label: 'Descripción',
      placeholder: 'Ingresa una descripción para tu apiario'
    }
  }
}

class CreateApiaryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: null,
      region: {
        latitude: -38.736854,
        longitude: -72.590328,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  };

  onFormChange = (formValue) => {
    this.setState({
      formValue: formValue
    });
  };

  onRegionChange = (region) => {
    this.setState({
      region: region
    });
  };

  createApiary = () => {
    var newApiaryForm = this.refs.newApiary;
    var formIsValid = !newApiaryForm.validate().errors.length > 0;

    if (formIsValid) {
      var newApiaryValues = newApiaryForm.getValue();
      var newApiary = {
        name: newApiaryValues.name,
        description: newApiaryValues.description,
        lat: this.state.region.latitude,
        long: this.state.region.longitude
      };

      this.props.createApiary(newApiary, () => {
        this.props.navigation.goBack();
        ToastAndroid.show('Apiario creado', ToastAndroid.SHORT);
      });
    } else {
      ToastAndroid.show('Debe llenar los campos obligatorios', ToastAndroid.SHORT);
      console.log('Form invalid');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Form value={this.state.formValue} onChange={this.onFormChange} ref="newApiary" type={Apiary} options={formOptions}/>
        </View>
        <Text style={styles.label}>Ubicación</Text>
        <MapPointSelector initialRegion={this.state.region} onRegionChange={this.onRegionChange} />
        <View style={{height: 35}}>
          <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="Crear Apiario" onPress={this.createApiary}/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { createApiary })(CreateApiaryScreen);
