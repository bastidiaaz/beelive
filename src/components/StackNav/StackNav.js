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
import routes from '../../config/routes';

routes.TabNav = {
  screen: TabNavElement
};

console.log(styles);
var options = {
  initialRouteName: 'TabNav',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  }
};

export const StackNavElement = StackNavigator(routes, options);

class StackNav extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  _getScreenName = () => {
    var index = this.props.nav.index;
    var route = this.props.nav.routes[index];
    if (route.routeName === "TabNav") {
      index = route.index;
      route = route.routes[index];
    }
    return route.routeName;
  }

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
