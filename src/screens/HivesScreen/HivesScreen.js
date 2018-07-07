import React from 'react';
import PropTypes from 'prop-types';
import { getHives } from '../../reducers/hivesReducer/hivesActions';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class HivesScreen extends React.Component {
  componentDidMount = () => {
    this.props.getHives();
  };

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

export default connect(mapStateToProps, { getHives })(HivesScreen);
