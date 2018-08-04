import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getReports } from '../../reducers/reportsReducer/reportsActions';
import styles from './styles';
import List from '../../components/List/List';

class HiveReportsScreen extends React.Component {
  componentDidMount = () => {
    this.props.getReports(this.props.hive);
  };

  _onPressItem = (item) => {
    this.props.navigation.navigate('EditReport', {report: item});
  };

  render() {
    return(
      <View style={styles.container}>
        <List icon={<Icon style={styles.icon} name={'file-text'} />} data={this.props.reports.data} titleKey={{key: 'dateTime', format: 'DD/MM/YYYY'}} subtitleKey={{key: 'dateTime', format: 'HH:mm'}} onPressItem={this._onPressItem}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  reports: state.reports
});

export default connect(mapStateToProps, { getReports })(HiveReportsScreen);
