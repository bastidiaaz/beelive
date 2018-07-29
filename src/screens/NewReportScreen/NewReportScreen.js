import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import DEFAULTS from '../../utils/constants';
import styles from './styles';

const Form = t.form.Form;
const Report = t.struct({
  q1: t.String,
  q2: t.String,
  q3: t.String,
  q4: t.String,
  q5: t.String,
  q6: t.String
});
const formOptions = {
  fields: {
    q1: {
      label: 'Pregunta 1',
      placeholder: 'Respuesta 1'
    },
    q2: {
      label: 'Pregunta 2',
      placeholder: 'Respuesta 2'
    },
    q3: {
      label: 'Pregunta 3',
      placeholder: 'Respuesta 3'
    },
    q4: {
      label: 'Pregunta 4',
      placeholder: 'Respuesta 4'
    },
    q5: {
      label: 'Pregunta 5',
      placeholder: 'Respuesta 5'
    },
    q6: {
      label: 'Pregunta 6',
      placeholder: 'Respuesta 6'
    }
  }
};

class NewReportScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formValue: null
    };
  };

  onFormChange = (formValue) => {
    this.setState({
      formValue: formValue
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Form value={this.state.formValue} onChange={this.onFormChange} ref="newReport" type={Report} options={formOptions}/>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{height: 35}}>
            <Button color={DEFAULTS.SECONDARY_COLOR} title="Guardar Reporte" onPress={() => {this.props.navigation.navigate('NewReport', {apiary: this.state.selectedApiary, hive: this.state.selectedHive})}}/>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries,
  hives: state.hives
});

export default connect(mapStateToProps)(NewReportScreen);
