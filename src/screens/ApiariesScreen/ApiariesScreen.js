import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { fetchApiaries } from '../../reducers/apiariesReducer/apiariesActions';
import styles from './styles';
import List from '../../components/List/List';
import FabButton from '../../components/FabButton/FabButton';

class ApiariesScreen extends React.Component {
  static propTypes = {
    fetchApiaries: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  };

  UNSAFE_componentWillMount = () => {
    this.props.fetchApiaries();
  }

  _onPressItem = (item) => {
    this.props.navigation.navigate('SingleHive', {apiary: item});
  };

  render() {
    return(
      <View style={styles.container}>
        <List data={this.props.data} onPressItem={this._onPressItem}/>
        <FabButton />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: state.apiaries.data
});

export default connect(mapStateToProps, { fetchApiaries })(ApiariesScreen);
