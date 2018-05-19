import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Badge } from 'react-native-elements';

import styles from './styles';

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

export default SortBy;
