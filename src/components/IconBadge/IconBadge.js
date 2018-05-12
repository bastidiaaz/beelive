import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

var styles = StyleSheet.create({
  container: {
    height: 47,
    width: 47,
  },
  icon: {
    fontSize: 40,
    color: '#757575'
  },
  badgeWrapper: {
    borderWidth: 2,
    borderColor: "#FFF",
    position:'absolute',
    right: 0,
    bottom: 0,
    minWidth:24,
    height:24,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#FFF'
  }
});

export default IconBadge;
