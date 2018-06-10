import React from 'react';
import {
  StatusBar,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { addListener } from '../../utils/redux';
import { addNavigationHelpers } from 'react-navigation';

import TabNavElement from '../TabNav/TabNav';
import styles from './styles';
import { stackRoutes } from '../../config/routes';

stackRoutes.TabNav = {
  screen: TabNavElement
};

var options = {
  initialRouteName: 'TabNav',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  }
};

export const StackNavElement = StackNavigator(stackRoutes, options);

class StackNav extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFA000" animated={true} />
        <StackNavElement
          navigation={addNavigationHelpers({
            dispatch,
            state: nav,
            addListener,
          })}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(StackNav);
