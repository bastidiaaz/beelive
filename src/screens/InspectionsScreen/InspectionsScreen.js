import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './styles';
import SortBy from '../../components/SortBy/SortBy';
import SortedList from '../../components/SortedList/SortedList';

class InspectionsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      badges: [
        {
          label: 'Nombre',
          key: 'name'
        },
        {
          label: 'Fecha',
          key: 'date'
        },
        {
          label: 'Estado',
          key: 'status'
        }
      ],
      sections: [
        {
          title: 'Enero',
          data: ['Reporte a Apiario 1', 'Reporte a Apiario 2']
        },
        {
          title: 'Febrero',
          data: ['Reporte a Apiario 3', 'Reporte a Apiario 1']
        },
        {
          title: 'Marzo',
          data: ['Reporte a Apiario 1', 'Reporte a Apiario 2']
        }
      ]
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          clearIcon={{ size: 24 }}
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchContainer}
          inputStyle={styles.input}
          hideBackground="true"
          placeholder="Búsqueda"
        />
        <SortBy label="Ordenar por:" badges={this.state.badges}/>
        <SortedList sections={this.state.sections}/>
      </View>
    )
  }
}

export default InspectionsScreen;
