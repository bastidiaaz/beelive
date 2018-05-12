import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40
  },
  title: {
    fontSize: 20
  },
  iconContainer: {
    height: 43,
    width: 43,

  },
  icon: {
    fontSize: 40,
    color: '#757575'
  },
  badge: {
    position:'absolute',
    right: 0,
    bottom: 0,
    minWidth:20,
    height:20,
    borderRadius:15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeText: {
    color: '#FFF'
  }
});

class InfoComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.content}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.iconContainer}>
            <Icon style={styles.icon} name="smile-o"/>
            <View style={styles.badge} backgroundColor="#388E3C">
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>
          <Text>Saludables</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.iconContainer}>
            <Icon style={styles.icon} name="frown-o"/>
            <View style={styles.badge} backgroundColor="#D32F2F">
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <Text>Criticas</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.iconContainer}>
            <Icon style={styles.icon} name="meh-o"/>
            <View style={styles.badge} backgroundColor="#455A64">
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <Text>Sin reportes</Text>
        </View>
      </View>
    )
  }
}

export default InfoComponent;
