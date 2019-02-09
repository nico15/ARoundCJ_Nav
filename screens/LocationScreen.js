import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

import LocationButtons from '../components/LocationButtons';
import GeoLocation from '../components/GeoLocation';


export class LocationScreen extends React.Component {
  getParams() {
      return this.props.navigation && this.props.navigation.state && this.props.navigation.state.params ?
          this.props.navigation.state.params
          :
          {}
  }
  render() {
    console.log("Loooooooooooocation", this.props.navigation.state.params);
    const { image, name, desc, key, geolock, index } = this.getParams().location;
    console.log("LoooooooooooocationPaaaarams", this.props)
    return (
      // this.props.location.name !== undefined &&
     <View style={{ flex: 1, backgroundColor: '#002266'}}>
      <ScrollView >
                <ImageBackground
                    source={image}
                    style={{width: '100%', height: 300}}
                >
                     <View 
                         style={{flex: 1, flexDirection: 'row', height:30, width:30, marginLeft:20, marginTop:25 }}
                      > 
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
                         <Image source={require('../assets/images/BackButton1.png')}/>
                        </TouchableWithoutFeedback>
                      </View>
                </ImageBackground>

              <View >
                <Text style={{ color:'white', fontSize: 15, textAlign:'center' }}>{`${key}. ${name}`}</Text>
                <Text style={{ color:'white', fontSize: 10, margin: 20 }}>{desc}</Text>
                
                <LocationButtons index={key} locations={this.getParams().locations} navigate={this.props.navigation.navigate}/>

                <GeoLocation />
              </View>
      </ScrollView>
      </View>
    );
    
  }
}