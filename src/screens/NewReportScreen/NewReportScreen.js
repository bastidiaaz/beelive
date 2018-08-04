import React from 'react';
import {
  Text,
  ToastAndroid,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import t from 'tcomb-form-native';
import DEFAULTS from '../../utils/constants';
import { createReport } from '../../reducers/reportsReducer/reportsActions';
import styles from './styles';

const Form = t.form.Form;
const Report = t.struct({
  q1: t.maybe(t.String),
  q2: t.maybe(t.String),
  q3: t.maybe(t.String),
  q4: t.maybe(t.String),
  q5: t.maybe(t.String),
  q6: t.maybe(t.String)
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

  createReport = () => {
    var newReportForm = this.refs.newReport;
    var formIsValid = !newReportForm.validate().errors.length > 0;

    if (formIsValid) {
      var newReportValues = newReportForm.getValue();
      var now = moment();
      // .format('DD/MM/YYYY HH:mm:ss')
      var newReport = {
        dateTime: now,
        questions: {
          q1: newReportValues.q1,
          q2: newReportValues.q2,
          q3: newReportValues.q3,
          q4: newReportValues.q4,
          q5: newReportValues.q5,
          q6: newReportValues.q6
        }
      };

      this.props.createReport(this.props.hive, newReport, () => {
        this.props.navigation.goBack();
        ToastAndroid.show('Reporte creado', ToastAndroid.SHORT);
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
          <Form value={this.state.formValue} onChange={this.onFormChange} ref="newReport" type={Report} options={formOptions}/>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{height: 35}}>
            <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="Crear Reporte" onPress={this.createReport}/>
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

export default connect(mapStateToProps, { createReport })(NewReportScreen);
