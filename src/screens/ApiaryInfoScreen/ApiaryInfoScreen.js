import React from 'react';
import {
  View,
  Text,
  ToastAndroid
} from 'react-native';
import t from 'tcomb-form-native';
import Button from '../../components/Button/Button';
import MapPointSelector from '../../components/MapPointSelector/MapPointSelector';
import { connect } from 'react-redux';
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
      placeholder: 'Ingresa un nombre para tu apiario',
      editable: false,
    },
    description: {
      label: 'Descripción',
      placeholder: 'Ingresa una descripción para tu apiario',
      editable: false,
    }
  }
}

class ApiaryInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: {
        name: this.props.apiary.name,
        description: this.props.apiary.description
      },
      region: {
        latitude: this.props.apiary.lat,
        longitude: this.props.apiary.long,
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

  editApiary = () => {
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
    return(
      <View style={styles.container}>
        <View>
          <Form value={this.state.formValue} onChange={this.onFormChange} ref="apiary" type={Apiary} options={formOptions}/>
        </View>
        <Text style={styles.label}>Ubicación</Text>
        <MapPointSelector initialRegion={this.state.region} onRegionChange={this.onRegionChange} />
        <Button onPress={this.createApiary} text="CREAR APIARIO" />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps)(ApiaryInfoScreen);
