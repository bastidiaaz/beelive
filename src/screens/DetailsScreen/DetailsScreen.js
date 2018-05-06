import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Header } from 'react-native-elements';


export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, paddingHorizontal: 3 }}>HOLA AMIGOS</Text>
        <Text style={{ fontSize: 24, paddingHorizontal: 3 }}>ESTE ES UN REPORTE</Text>
      </View>
    );
  }
}
