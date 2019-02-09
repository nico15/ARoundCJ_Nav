import React, { Component } from 'react';
import { View, Text } from 'react-native';
import geo from 'geolib';


class GeoLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          distance: geo.getDistance(position.coords, {
            latitude: 46.753179,
            longitude: 23.564511
            }),
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    ); 
  }
 //46.753179, 23.564511 
//46.758997, 23.562611
  render() {
    const {geolock} = this.props
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center',  marginBottom:20, }}>
        <Text style={{ color:'red'}}>Latitude: {this.state.latitude}</Text>
        <Text style={{ color:'red'}}>Longitude: {this.state.longitude}</Text>
        <Text style={{ color:'red'}}>You are { this.state.distance } meters away from 51.525, 7.4575</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

export default GeoLocation;