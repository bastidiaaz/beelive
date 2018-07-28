import React from 'react';
import {
  Picker,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { getApiaries } from '../../reducers/apiariesReducer/apiariesActions';
import styles from './styles';

class ReportsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedApiary: this.props.apiaries.data[0]
    };

    console.log(this.state);
  };

  componentDidMount = () => {
    this.props.getApiaries();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Seleccione un apiario</Text>
          <Picker
            selectedValue={this.state.selectedApiary}
            style={styles.picker, {height: 50}}
            onValueChange={(itemValue, itemIndex) => this.setState({selectedApiary: itemValue})}>
            {
              this.props.apiaries.data.map((apiary, key) => {
                return <Picker.Item key={apiary.name} label={apiary.name} value={apiary} />
              })
            }
          </Picker>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries,
  hives: state.hives
});

export default connect(mapStateToProps, { getApiaries })(ReportsScreen);
