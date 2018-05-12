import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
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
          data: ['Reporte a Colmena 1', 'Reporte a Colmena 2']
        },
        {
          title: 'Febrero',
          data: ['Reporte a Colmena 3', 'Reporte a Colmena 1']
        },
        {
          title: 'Marzo',
          data: ['Reporte a Colmena 1', 'Reporte a Colmena 2']
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#FFC107',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  input: {
    backgroundColor: '#FFECB3'
  }
})
export default InspectionsScreen;
