import React from 'react';
import { View, Text } from 'react-native';
import List from '../../components/List/List';
import Icon from 'react-native-vector-icons/FontAwesome';
import FabButton from '../../components/FabButton/FabButton';
import { getHives } from '../../reducers/hivesReducer/hivesActions';
import { connect } from 'react-redux';
import styles from './styles';

class ApiaryHivesScreen extends React.Component {
  componentDidMount = () => {
    this.props.getHives(this.props.apiary.name);
  };

  _onPressItem = (item) => {
    this.props.navigation.navigate('EditHive', {hive: item});
  };

  render() {
    return(
      <View style={styles.container}>
        { this.props.hives.data.length > 0 ? (
          <List icon={<Icon style={styles.icon} name={'forumbee'} />} data={this.props.hives.data} titleKey={{key: 'name'}} subtitleKey={{key: 'description'}} onPressItem={this._onPressItem}/>
        ) : (
          <View style={styles.textMutedContainer}>
            <Text style={styles.textMuted}>Presione el botón "+" para crear una colmena</Text>
          </View>
        )}
        <FabButton onPress={() => { this.props.navigation.navigate('CreateHive', {apiary: this.props.apiary}) }}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps, { getHives })(ApiaryHivesScreen);
