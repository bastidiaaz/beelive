import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class IconBadge extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Icon style={styles.icon} name={this.props.name}/>
        <View style={styles.badgeWrapper} backgroundColor={this.props.badgeBackgroundColor}>
          <Text style={styles.badgeText}>{this.props.badgeValue}</Text>
        </View>
      </View>
    )
  }
}

export default IconBadge;
