import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { getApiaries } from '../../reducers/apiariesReducer/apiariesActions';
import styles from './styles';
import List from '../../components/List/List';
import FabButton from '../../components/FabButton/FabButton';

class ApiariesScreen extends React.Component {
  static propTypes = {
    getApiaries: PropTypes.func.isRequired,
    apiaries: PropTypes.object.isRequired
  };

  UNSAFE_componentWillMount = () => {
    this.props.getApiaries();
  }

  _onPressItem = (item) => {
    this.props.navigation.navigate('SingleApiary', {apiary: item});
  };

  render() {
    return(
      <View style={styles.container}>
        <List data={this.props.apiaries.data} onPressItem={this._onPressItem}/>
        <FabButton onPress={() => { this.props.navigation.navigate('CreateApiary') }}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { getApiaries })(ApiariesScreen);
