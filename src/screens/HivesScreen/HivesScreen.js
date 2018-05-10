import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ToolbarAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FabButton from '../../components/FabButton/FabButton';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 25,
    flex: 1
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem: {
    height: 50,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemIcon: {
    fontSize: 20,
    marginRight: 40
  },
  primaryText: {
    color: '#212121'
  },
  secondaryText: {
    color: '#757575'
  }
});

class HivesScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.listItem}>
            <Icon style={styles.itemIcon} name="cube"/>
            <View>
              <Text style={styles.primaryText}>{'Colmena 1'.toUpperCase()}</Text>
              <Text style={styles.secondaryText}>Estado: Saludable, Población: ~100</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Icon style={styles.itemIcon} name="cube"/>
            <View>
              <Text style={styles.primaryText}>{'Colmena 2'.toUpperCase()}</Text>
              <Text style={styles.secondaryText}>Estado: Crítico, Población: ~130</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Icon style={styles.itemIcon} name="cube"/>
            <View>
              <Text style={styles.primaryText}>{'Colmena 3'.toUpperCase()}</Text>
              <Text style={styles.secondaryText}>Estado: Saludable, Población: ~50</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <FabButton />
      </View>
    )
  }
}

export default HivesScreen;
