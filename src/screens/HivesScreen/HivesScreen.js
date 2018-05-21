import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { fetchHives } from '../../reducers/hivesReducer/hivesActions';
import styles from './styles';
import List from '../../components/List/List';
import FabButton from '../../components/FabButton/FabButton';

class HivesScreen extends React.Component {
  static propTypes = {
    fetchHives: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  };

  UNSAFE_componentWillMount(){
    this.props.fetchHives();
  }

  render() {
    return(
      <View style={styles.container}>
        <List data={this.props.data} />
        <FabButton />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: state.hives.data
});

export default connect(mapStateToProps, { fetchHives })(HivesScreen);
