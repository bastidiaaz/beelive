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

import styles from './styles';
import List from '../../components/List/List';
import FabButton from '../../components/FabButton/FabButton';

class HivesScreen extends React.Component {
  static navigationOptions = {
    title: 'Colmenas'
  };

  constructor(props) {
    super(props);

    this.state = {
      hives: []
    };
  }

  UNSAFE_componentWillMount(){
    fetch('http://192.168.1.130:3000/hives')
    .then(response => response.json())
    .then(data => this.setState({ hives: data }));
  }

  render() {
    return(
      <View style={styles.container}>
        <List data={this.state.hives} />
        <FabButton />
      </View>
    )
  }
}

export default HivesScreen;
