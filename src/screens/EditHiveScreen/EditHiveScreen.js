import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import t from 'tcomb-form-native';
import DEFAULTS from '../../utils/constants';
import { updateHive } from '../../reducers/hivesReducer/hivesActions';
import { connect } from 'react-redux';
import styles from './styles';

const Form = t.form.Form;
const Hive = t.struct({
  name: t.String,
  description: t.maybe(t.String)
});

class EditHiveScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      formValue: {
        name: this.props.hive.name,
        description: this.props.hive.description
      }
    };
  };

  onFormChange = (formValue) => {
    this.setState({
      formValue: formValue
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
          name: this.props.hive.name,
          description: this.props.hive.description
        }
      });
    }
  }

  updateHive = () => {
    var hiveForm = this.refs.hive;
    var formIsValid = !hiveForm.validate().errors.length > 0;

    if (formIsValid) {
      var hiveValues = hiveForm.getValue();
      var hive = {
        prevValues: {
          ...this.props.hive
        },
        newValues: {
          name: hiveValues.name,
          description: hiveValues.description,
          apiary: this.props.hive.apiary
        }
      };

      this.props.updateHive(hive, () => {
        //this.props.navigation.navigate('SingleApiary', {apiary: apiary.newValues}); navigate to the same view
        this.setState({
          editable: false
        });
        ToastAndroid.show('Colmena Actualizada', ToastAndroid.SHORT);
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
        <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="           Guardar          " onPress={this.updateHive}/>
        <Button color={DEFAULTS.PRIMARY_COLOR_LIGHTEST} title="         Cancelar            " onPress={this.toggleEdit}/>
      </View>
    </View>;

    const displayNoEdit =
    <View style={{height: 35}}>
      <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="Editar Información" onPress={this.toggleEdit}/>
    </View>

    const isEditable = this.state.editable;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
          <View>
            <Form value={this.state.formValue} onChange={this.onFormChange} ref="hive" type={Hive} options={formOptions}/>
          </View>
        </ScrollView>
        {isEditable ? displayEdit : displayNoEdit}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps, { updateHive })(EditHiveScreen);
