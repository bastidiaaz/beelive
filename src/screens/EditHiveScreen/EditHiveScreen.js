import React from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import t from 'tcomb-form-native';
import { updateHive } from '../../reducers/hivesReducer/hivesActions';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import styles from './styles';

const Form = t.form.Form;
const Hive = t.struct({
  name: t.String,
  description: t.maybe(t.String)
});
const formOptions = {
  fields: {
    name: {
      label: 'Nombre *',
      placeholder: 'Ingresa un nombre para tu colmena'
    },
    description: {
      label: 'Descripción',
      placeholder: 'Ingresa una descripción para tu colmena'
    }
  }
}

class EditHiveScreen extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    this.state = {
      formValue: {
        name: this.props.hive.name,
        description: this.props.hive.description
      }
    };
    console.log(this.props.navigation);
  };

  onFormChange = (formValue) => {
    this.setState({
      formValue: formValue
    });
  };

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
        this.props.navigation.goBack();
        ToastAndroid.show('Colmena Actualizada', ToastAndroid.SHORT);
      });
    } else {
      ToastAndroid.show('Debe llenar los campos obligatorios', ToastAndroid.SHORT);
      console.log('Form invalid');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.formContainer}>
          <View>
            <Form value={this.state.formValue} onChange={this.onFormChange} ref="hive" type={Hive} options={formOptions}/>
          </View>
          <Button onPress={this.updateHive} text="ACTUALIZAR COLMENA" />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps, { updateHive })(EditHiveScreen);
