import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import styles from './styles';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <TouchableOpacity onPress={() => {this.props.onPress()}} style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Button;
