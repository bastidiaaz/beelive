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
      selectedApiary: this.props.apiaries.data[0],
      selectedHive: this.props.hives.data[0]
    };
  };

  componentDidMount = () => {
    this.props.getApiaries().then(() => {
      if (this.props.apiaries.data.length > 0) {
        this.setState({
          selectedApiary: this.props.apiaries.data[0],
        }, () => {
          this.props.getHives(this.state.selectedApiary.name).then(() => {
            this.setState({
              selectedHive: this.props.hives.data[0],
            });
          });
        });
      }
    });

    willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      payload => {
        this.props.getApiaries().then(() => {
          if (this.props.apiaries.data.length > 0) {
            this.setState({
              selectedApiary: this.props.apiaries.data[0],
            }, () => {
              this.props.getHives(this.state.selectedApiary.name).then(() => {
                this.setState({
                  selectedHive: this.props.hives.data[0],
                });
              });
            });
          }
        });
      }
    )
  };

  onApiaryChange = (newValue, key) => {
    this.setState({
      selectedApiary: newValue
    }, () => {
      this.props.getHives(newValue.name).then(() => {
        this.setState({
          selectedHive: this.props.hives.data[0],
        });
      });
    });
  }

  onHiveChange = (newValue, key) => {
    this.setState({
      selectedHive: newValue
    });
  }

  render() {
    const renderWhenNoHives = this.props.hives.data.length > 0 ? (
      <View style={{flex: 1}}>
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
            { this.state.selectedHive && this.state.selectedHive.totalReports > 0 ? (
              <Text style={styles.text}>Esta colmena tiene {this.state.selectedHive.totalReports} reportes</Text>
            ) : (
              <Text style={styles.text}>Esta colmena no tiene reportes</Text>
            )}
            <Button disabled={(this.state.selectedHive && this.state.selectedHive.totalReports == 0)} color={DEFAULTS.PRIMARY_COLOR_DARK} title="Ver Reportes" onPress={() => {this.props.navigation.navigate('HiveReports', {hive: this.state.selectedHive})}}/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={{height: 35}}>
            <Button color={DEFAULTS.SECONDARY_COLOR} title="Iniciar un Nuevo Reporte" onPress={() => {this.props.navigation.navigate('NewReport', {apiary: this.state.selectedApiary, hive: this.state.selectedHive})}}/>
          </View>
        </View>
      </View>
    ) : (
      <View style={styles.textMutedContainer}>
        <Text style={styles.textMuted}>El apiario seleccionado no tiene ninguna colmena. Cree una nueva colmena e intentelo nuevamente</Text>
      </View>
    );

    const renderWhenNoApiaries = this.props.apiaries.data.length > 0 ? (
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
        { renderWhenNoHives }
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.textMutedContainer}>
          <Text style={styles.textMuted}>Aún no ha configurado ningún apiario. Cree un nuevo apiario e intentelo nuevamente</Text>
        </View>
      </View>
    );

    return (
      renderWhenNoApiaries
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries,
  hives: state.hives
});

export default connect(mapStateToProps, { getApiaries, getHives })(ReportsScreen);
