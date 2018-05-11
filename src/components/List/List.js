import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';

// var styles = StyleSheet.create({
//   container: {
//
//   }
// });

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({item}) => (
    <ListItem

      title={item.name}
      subtitle={`Estado: ${item.status}`}
    />
  )

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
      />
    )
  }
}

export default List;
