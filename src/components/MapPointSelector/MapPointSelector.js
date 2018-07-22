import React from 'react';
import {
  Image,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import marker from  '../../../assets/images/map_marker.png';
import styles from './styles';

class MapPointSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={this.props.initialRegion}
          onRegionChange={this.props.onRegionChange}
          loadingEnabled={true}
          scrollEnabled={this.props.scrollEnabled}/>
        <View pointerEvents="none" style={{flex: 1}}>
          <Image style={styles.marker} source={marker} />
        </View>
      </View>
    )
  }
}

export default MapPointSelector;
