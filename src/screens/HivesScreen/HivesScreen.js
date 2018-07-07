import React from 'react';
import { View } from 'react-native';
import List from '../../components/List/List';
import FabButton from '../../components/FabButton/FabButton';
import { getHives } from '../../reducers/hivesReducer/hivesActions';
import { connect } from 'react-redux';
import styles from './styles';

class HivesScreen extends React.Component {
  componentDidMount = () => {
    this.props.getHives();
  };

  render() {
    return(
      <View style={styles.container}>
        <List data={this.props.hives.data}/>
        <FabButton onPress={() => { this.props.navigation.navigate('CreateHive') }}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hives: state.hives
});

export default connect(mapStateToProps, { getHives })(HivesScreen);
