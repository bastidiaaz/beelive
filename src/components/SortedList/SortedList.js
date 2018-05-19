import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import styles from './styles';

class SortedList extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({item, index, section}) => (
    <ListItem
      key={item.key}
      title={item}
      subtitle={'Fecha: ALGO'}
      containerStyle={styles.listItem}
    />
  )

  _renderSectionHeader = ({section}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  )

  render() {
    return(
      <SectionList
        renderItem={this._renderItem}
        renderSectionHeader={this._renderSectionHeader}
        sections={this.props.sections}
        keyExtractor={(item, index) => item + index}
        style={styles.container}
      />
    )
  }
}

export default SortedList;
