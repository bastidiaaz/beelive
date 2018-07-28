import React from 'react';
import { View } from 'react-native';
import List from '../../components/List/List';
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
        <List data={this.props.hives.data} onPressItem={this._onPressItem}/>
        <FabButton onPress={() => { this.props.navigation.navigate('CreateHive', {apiary: this.props.apiary}) }}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps, { getHives })(ApiaryHivesScreen);
