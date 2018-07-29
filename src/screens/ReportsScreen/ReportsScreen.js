import React from 'react';
import {
  Picker,
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { getApiaries } from '../../reducers/apiariesReducer/apiariesActions';
import { getHives } from '../../reducers/hivesReducer/hivesActions';
import DEFAULTS from '../../utils/constants';
import styles from './styles';

class ReportsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedApiary: null,
      selectedHive: null
    };
  };

  componentDidMount = () => {
    this.props.getApiaries().then(() => {
      this.setState({
        selectedApiary: this.props.apiaries.data[0],
      });

      this.props.getHives(this.state.selectedApiary.name).then(() => {
        this.setState({
          selectedHive: this.props.hives.data[0],
        });
      });
    });
  };

  onApiaryChange = (newValue, key) => {
    this.setState({
      selectedApiary: newValue
    });

    this.props.getHives(newValue.name).then(() => {
      this.setState({
        selectedHive: this.props.hives.data[0],
      });
    });
  }

  onHiveChange = (newValue, key) => {
    this.setState({
      selectedHive: newValue
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text style={styles.label}>Seleccione un apiario</Text>
          <Picker
            selectedValue={this.state.selectedApiary}
            style={styles.picker, {height: 50}}
            onValueChange={this.onApiaryChange}>
            {
              this.props.apiaries.data.map((apiary, key) => {
                return <Picker.Item key={apiary.name} label={apiary.name} value={apiary} />
              })
            }
          </Picker>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.label}>Seleccione la colmena a inspeccionar</Text>
          <Picker
            selectedValue={this.state.selectedHive}
            style={styles.picker, {height: 50}}
            onValueChange={this.onHiveChange}>
            {
              this.props.hives.data.map((hive, key) => {
                return <Picker.Item key={hive.apiary + hive.name} label={hive.name} value={hive} />
              })
            }
          </Picker>
        </View>
        <View style={styles.sectionContainer, {height: 35}}>
          <View style={styles.inlineContainer}>
            <Text style={styles.text}>Esta colmena tiene 6 reportes</Text>
            <Button color={DEFAULTS.PRIMARY_COLOR_DARK} title="Ver Reportes" onPress={() => {console.log('holas');}}/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{height: 35}}>
            <Button color={DEFAULTS.SECONDARY_COLOR} title="Iniciar un Nuevo Reporte" onPress={() => {console.log('holas');}}/>
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

export default connect(mapStateToProps, { getApiaries, getHives })(ReportsScreen);
