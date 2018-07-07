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
import { mapNavigationStateParamsToProps } from '../../utils/helpers.js';

import TabNavElement from '../TabNav/TabNav';
import EditApiaryScreen from '../../screens/EditApiaryScreen/EditApiaryScreen';
import CreateApiaryScreen from '../../screens/CreateApiaryScreen/CreateApiaryScreen';

import styles from './styles';
import DEFAULTS from '../../utils/constants';

var options = {
  initialRouteName: 'TabNav',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.title
  }
};

var stackRoutes = {
  TabNav: {
    screen: TabNavElement
  },
  EditApiary: {
    screen: mapNavigationStateParamsToProps(EditApiaryScreen),
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('apiary', null).name
    })
  },
  CreateApiary: {
    screen: mapNavigationStateParamsToProps(CreateApiaryScreen),
    navigationOptions: ({ navigation }) => ({
      title: "Nuevo Apiario"
    })
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
        <StatusBar backgroundColor={DEFAULTS.PRIMARY_COLOR_DARKER} animated={true} />
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
