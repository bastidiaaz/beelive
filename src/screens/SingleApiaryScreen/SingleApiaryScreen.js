import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';

class SingleHiveScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var apiary = this.props.navigation.getParam('apiary', null);
    return(
      <View style={styles.container}>
        <Text>HOALHALLDFS</Text>
      </View>
    )
  }
}

export default SingleHiveScreen;
