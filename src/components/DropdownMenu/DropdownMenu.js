import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <Menu ref={this.setMenuRef} button={<TouchableOpacity style={styles.headerButton} onPress={this.showMenu}><Icon style={styles.headerIcon} name={'ellipsis-v'}/></TouchableOpacity>}>
        {
          this.props.items.map((item, index) => {
            return <MenuItem key={index} onPress={() => {item.onPress(); this.hideMenu()}}>{item.label}</MenuItem>
          })
        }
      </Menu>
    );
  }
}

export default DropdownMenu;
