import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TouchableHighlight } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

import LocationButtons from '../components/LocationButtons';


export class LocationScreen extends React.Component {
  getParams() {
      return this.props.navigation && this.props.navigation.state && this.props.navigation.state.params ?
          this.props.navigation.state.params
          :
          {}
  }


  render() {
    console.log("Loooooooooooocation", this.props.navigation.state.params);
    const { image, name, desc, key, index } = this.getParams();
    console.log("LoooooooooooocationPaaaarams", this.props)
    return (
      <ScrollView style={{ flex: 1}}>
        <View style={{ flex: 1, justifyContent:'center', backgroundColor: '#000'}}>
                <ImageBackground
                    source={image}
                    style={{width: '100%', height: 300}}
                />
              <View style={{ backgroundColor: '#002266'}}>
                <Text style={{ color:'white', fontSize: 15, textAlign:'center' }}>{`${key}. ${name}`}</Text>
                <Text style={{ color:'white', fontSize: 10, margin: 20 }}>{desc}</Text>
             {/* Buttons */}
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                  <View 
                    style={{flex: 1, flexDirection: 'row',marginTop: 35}}>     
                    <Image source={require('../assets/images/AR_View.png')} />
                    <Image source={require('../assets/images/Directions.png')} style={{marginLeft:10}}/>
                  </View>
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('Location', { name: 'Art Museum' })}>
                  <Image source={require('../assets/images/NextSight.png')}   
                      // onPress={() => { Alert.alert('You tapped the button!')}}
                      // onPress={() => this.setState({ key: this.state.key + 1})}
                  />
                  </TouchableHighlight>
 
                </View>
              </View>
          </View>
      </ScrollView>
    );
    
  }
}