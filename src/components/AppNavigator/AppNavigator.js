import React from 'react';
import {
  StatusBar,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { addListener } from '../../utils/redux';
import { addNavigationHelpers } from 'react-navigation';

import styles from './styles';
import routes from '../../config/routes';

var options = {
  initialRouteName: 'Colmenas',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: false,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: styles.tab,
    indicatorStyle: styles.tabIndicator
  }
};

export const AppNavigator = TabNavigator(routes, options);


class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  _getScreenName = () => {
    var index = this.props.nav.index;
    var route = this.props.nav.routes[index];
    return route.routeName;
  }

  render() {
    const { dispatch, nav } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FFA000" animated={true} />
        <View style={styles.header}>
          <Text style={styles.title}>{this._getScreenName()}</Text>
        </View>
        <AppNavigator
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

export default connect(mapStateToProps)(AppWithNavigationState);
