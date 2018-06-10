import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

import EditApiaryScreen from '../screens/EditApiaryScreen/EditApiaryScreen';
import ApiariesScreen from '../screens/ApiariesScreen/ApiariesScreen';
import InspectionsScreen from '../screens/InspectionsScreen/InspectionsScreen';
import SummaryScreen from '../screens/SummaryScreen/SummaryScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

var styles = StyleSheet.create({
  icon: {
    fontSize: 22,
    color: '#FFF'
  }
});

//Function that maps the state params into the props of the component
const mapNavigationStateParamsToProps = (SomeComponent) => {
    return class extends React.Component {
        static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
        render() {
            const { navigation: { state: { params } } } = this.props;
            return <SomeComponent {...params} {...this.props} />
        }
    }
}

var stackRoutes = {
  SingleHive: {
    screen: mapNavigationStateParamsToProps(EditApiaryScreen),
    navigationOptions: ({ navigation }) => ({
      title: navigation.getParam('apiary', null).name
    })
  }
};

var tabRoutes = {
  Apiaries: {
    screen: ApiariesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="forumbee" style={styles.icon}/>,
      title: "Apiarios"
    })
  },
  Inspections: {
    screen: InspectionsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="bar-chart" style={styles.icon}/>,
      title: "Inspecciones"
    })
  },
  Summary: {
    screen: SummaryScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="home" style={styles.icon}/>,
      title: "Resumen"
    })
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => <Icon name="home" style={styles.icon}/>
    })
  },
};

export { tabRoutes, stackRoutes };
