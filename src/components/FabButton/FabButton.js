import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class FabButton extends React.Component {
  render() {
    return(
      <TouchableOpacity style={styles.fabButton}>
        <Icon name="plus" style={styles.icon}/>
      </TouchableOpacity>
    )
  }
}

export default FabButton;
