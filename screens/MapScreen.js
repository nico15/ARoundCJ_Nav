import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Map extends React.Component {
    render() {
      return (
        <View style={{ flex: 1}}>
          <View style={{ flex: 1, justifyContent:'center', backgroundColor: '#000'}}>
          <Text style={{ color:'white', fontSize: 25, textAlign: 'center'}}>Comming SOON!</Text>
          </View>
        </View>
      );
    }
  }