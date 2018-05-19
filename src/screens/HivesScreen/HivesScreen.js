import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  ScrollView,
  ToolbarAndroid,
  TouchableOpacity,
  View
} from 'react-native';

import List from '../../components/List/List';
import FabButton from '../../components/FabButton/FabButton';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
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
  }
});

class HivesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        key: '0',
        name: 'Colmena 1',
        status: 'Saludable',
        population: '~100'
      }, {
        key: '1',
        name: 'Colmena 2',
        status: 'Critico',
        population: '~80'
      }, {
        key: '2',
        name: 'Colmena 3',
        status: 'Saludable',
        population: '~120'
      } , {
        key: '3',
        name: 'Colmena 3',
        status: 'Saludable',
        population: '~120'
      }]
    };

    console.log(this.props);
  }

  render() {
    return(
      <View style={styles.container}>
        <List data={this.state.data} />
        <FabButton />
      </View>
    )
  }
}

export default HivesScreen;
