import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          style="{backgroundColor: yellow}"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Text>Home Screen</Text>
      </View>
    )
  }
}
