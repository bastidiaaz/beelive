import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DEFAULTS from '../../utils/constants';
import _ from 'lodash';
import moment from 'moment';

import styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({item}) => {
    var title = this.props.titleKey;
    var subtitle = this.props.subtitleKey;

    if (!_.isUndefined(this.props.titleKey.format)) {
      title = moment(item[this.props.titleKey.key]).format(this.props.titleKey.format);
    } else {
      title = item[this.props.titleKey.key];
    }

    if (!_.isUndefined(this.props.subtitleKey.format)) {
      subtitle = moment(item[this.props.subtitleKey.key]).format(this.props.subtitleKey.format);
    } else {
      subtitle = item[this.props.subtitleKey.key];
    }

    return (
      <ListItem
        leftIcon={<View style={styles.iconContainer}>{this.props.icon}</View>}
        onPress={() => this.props.onPressItem(item)}
        containerStyle={{ borderBottomColor: DEFAULTS.DIVIDER_COLOR, borderBottomWidth: 0.7}}
        title={title}
        subtitle={subtitle}
      />
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

export default List;
