import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class HivesScreen extends React.Component {
  render() {
    console.log(this.props);
    return(
      <View style={styles.container}>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps)(HivesScreen);
