import React from 'react';
import {
  Button,
  View,
  Text,
  ToastAndroid
} from 'react-native';
import t from 'tcomb-form-native';
import MapPointSelector from '../../components/MapPointSelector/MapPointSelector';
import DEFAULTS from '../../utils/constants';
import { updateApiary } from '../../reducers/apiariesReducer/apiariesActions';
import { connect } from 'react-redux';
import styles from './styles';

const Form = t.form.Form;
const Apiary = t.struct({
  name: t.String,
  description: t.maybe(t.String)
});

class ApiaryInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
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

  toggleEdit = () => {
    var newValue = !this.state.editable;
    this.setState({
      editable: newValue
    });

    if (!newValue) {
      this.setState({
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
      });
    }
  }

  updateApiary = () => {
    var apiaryForm = this.refs.apiary;
    var formIsValid = !apiaryForm.validate().errors.length > 0;

    if (formIsValid) {
      var apiaryValues = apiaryForm.getValue();
      var apiary = {
        prevValues: {
          ...this.props.navigation.getParam('apiary', null)
        },
        newValues: {
          name: apiaryValues.name,
          description: apiaryValues.description,
          lat: this.state.region.latitude,
          long: this.state.region.longitude
        }
      };

      this.props.updateApiary(apiary, () => {
        this.props.navigation.navigate('SingleApiary', {apiary: apiary.newValues});
        this.setState({
          editable: false
        });
        ToastAndroid.show('Apiario actualizado', ToastAndroid.SHORT);
      });
    } else {
      ToastAndroid.show('Debe llenar los campos obligatorios', ToastAndroid.SHORT);
      console.log('Form invalid');
    }
  }

  render() {
    const formOptions = {
      fields: {
        name: {
          label: 'Nombre *',
          placeholder: 'Ingresa un nombre para tu apiario',
          editable: this.state.editable,
        },
        description: {
          label: 'Descripción',
          placeholder: 'Ingresa una descripción para tu apiario',
          editable: this.state.editable,
        }
      }
    };

    const displayEdit =
    <View style={{height: 35}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="           Guardar          " onPress={this.updateApiary}/>
        <Button color={DEFAULTS.PRIMARY_COLOR_LIGHTEST} title="         Cancelar            " onPress={this.toggleEdit}/>
      </View>
    </View>;

    const displayNoEdit =
    <View style={{height: 35}}>
      <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="Editar Información" onPress={this.toggleEdit}/>
    </View>

    const isEditable = this.state.editable;

    return(
      <View style={styles.container}>
        <View>
          <Form value={this.state.formValue} onChange={this.onFormChange} ref="apiary" type={Apiary} options={formOptions}/>
        </View>
        <Text style={styles.label}>Ubicación</Text>
        <MapPointSelector scrollEnabled={this.state.editable} initialRegion={this.state.region} onRegionChange={this.onRegionChange} />
        {isEditable ? displayEdit : displayNoEdit}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps, { updateApiary })(ApiaryInfoScreen);
