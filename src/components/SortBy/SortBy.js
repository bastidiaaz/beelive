import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Badge } from 'react-native-elements';

class SortBy extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.badgeWrapper}>
          {
            this.props.badges.map(( badge, key ) =>
              (
                <Badge
                  key={ key }
                  value={badge.label}
                  containerStyle={styles.badgeContainer}/>
              )
            )
          }
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#FFC107',
    alignItems: 'center'
  },
  label: {
    color: '#FFF',
    fontSize: 15
  },
  badgeWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  badgeContainer: {
    backgroundColor: '#FF5722',
    marginRight: 10
  }
});

export default SortBy;
