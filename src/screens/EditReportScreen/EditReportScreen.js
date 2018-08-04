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
import { updateReport } from '../../reducers/reportsReducer/reportsActions';
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

class NewReportScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      formValue: {
        q1: this.props.report.questions.q1,
        q2: this.props.report.questions.q2,
        q3: this.props.report.questions.q3,
        q4: this.props.report.questions.q4,
        q5: this.props.report.questions.q5,
        q6: this.props.report.questions.q6
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
      console.log(this.props.report);
      this.setState({
        formValue: {
          q1: this.props.report.questions.q1,
          q2: this.props.report.questions.q2,
          q3: this.props.report.questions.q3,
          q4: this.props.report.questions.q4,
          q5: this.props.report.questions.q5,
          q6: this.props.report.questions.q6
        }
      });
    }
  }

  updateReport = () => {
    var reportForm = this.refs.report;
    var formIsValid = !reportForm.validate().errors.length > 0;

    if (formIsValid) {
      var reportValues = reportForm.getValue();
      var report = {
        prevValues: {
          ...this.props.report
        },
        newValues: {
          apiary: this.props.report.apiary,
          hive: this.props.report.hive,
          dateTime: this.props.report.dateTime,
          questions: {
            q1: reportValues.q1,
            q2: reportValues.q2,
            q3: reportValues.q3,
            q4: reportValues.q4,
            q5: reportValues.q5,
            q6: reportValues.q6
          }
        }
      };

      this.props.updateReport(report, () => {
        this.setState({
          editable: false
        });
        ToastAndroid.show('Reporte Actualizado', ToastAndroid.SHORT);
      });
    } else {
      ToastAndroid.show('Debe llenar los campos obligatorios', ToastAndroid.SHORT);
      console.log('Form invalid');
    }
  }

  render() {
    const formOptions = {
      fields: {
        q1: {
          label: 'Pregunta 1',
          editable: this.state.editable,
        },
        q2: {
          label: 'Pregunta 2',
          editable: this.state.editable,
        },
        q3: {
          label: 'Pregunta 3',
          editable: this.state.editable,
        },
        q4: {
          label: 'Pregunta 4',
          editable: this.state.editable,
        },
        q5: {
          label: 'Pregunta 5',
          editable: this.state.editable,
        },
        q6: {
          label: 'Pregunta 6',
          editable: this.state.editable,
        }
      }
    };

    const displayEdit =
    <View style={{height: 35}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="Guardar" onPress={this.updateReport}/>
        <Button color={'white'} title="Cancelar" onPress={this.toggleEdit}/>
      </View>
    </View>;

    const displayNoEdit =
    <View style={{height: 35}}>
      <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="Editar datos" onPress={this.toggleEdit}/>
    </View>

    const isEditable = this.state.editable;

    return (
      <View style={styles.container}>
        <View>
          <Form value={this.state.formValue} onChange={this.onFormChange} ref="report" type={Report} options={formOptions}/>
        </View>
        <View style={styles.buttonContainer}>
        {isEditable ? displayEdit : displayNoEdit}
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  reports: state.reports
});

export default connect(mapStateToProps, { updateReport })(NewReportScreen);
