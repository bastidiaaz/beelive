import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getApiaries } from '../../reducers/apiariesReducer/apiariesActions';
import styles from './styles';
import List from '../../components/List/List';
import apiary from  '../../../assets/images/apiary_icon.png';
import FabButton from '../../components/FabButton/FabButton';

class ApiariesScreen extends React.Component {
  componentDidMount = () => {
    this.props.getApiaries();
  };

  _onPressItem = (item) => {
    this.props.navigation.navigate('SingleApiary', {apiary: item});
  };

  render() {
    return(
      <View style={styles.container}>
        { this.props.apiaries.data.length > 0 ? (
          <List icon={<Image style={styles.imageIcon} source={apiary} />} data={this.props.apiaries.data} titleKey={{key: 'name'}} subtitleKey={{key: 'description'}} onPressItem={this._onPressItem}/>
        ) : (
          <View style={styles.textMutedContainer}>
            <Text style={styles.textMuted}>Presione el botón "+" para crear su primer apiario</Text>
          </View>
        )}
        <FabButton onPress={() => { this.props.navigation.navigate('CreateApiary') }}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  apiaries: state.apiaries
});

export default connect(mapStateToProps, { getApiaries })(ApiariesScreen);
