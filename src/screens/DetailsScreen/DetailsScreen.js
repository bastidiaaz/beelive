import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Header } from 'react-native-elements';


export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text>Details Screen</Text>
      </View>
    );
  }
}
