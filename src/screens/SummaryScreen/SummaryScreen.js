import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import InfoComponent from '../../components/InfoComponent/InfoComponent';

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
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Total de colmenas: </Text>
          <Text style={[styles.title, {fontWeight: 'bold'}]}>6</Text>
        </View>
        <InfoComponent />
      </View>
    )
  }
}

export default SummaryScreen;
