import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoComponent from '../../components/InfoComponent/InfoComponent';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 15
  }
});
class SummaryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inactiveHives: [
        {
          key: '1',
          name: 'Colmena 2',
          status: 'Critico',
          population: '~80',
          inactiveDays: '2'
        }
      ],
      criticalHives: [
        {
          key: '1',
          name: 'Colmena 2',
          status: 'Critico',
          population: '~80'
        }
      ],
      lastInspection: []
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
          <Text style={{fontSize: 25}}>Total de colmenas: </Text>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>6</Text>
        </View>
        <InfoComponent />
      </View>
    )
  }
}

export default SummaryScreen;
