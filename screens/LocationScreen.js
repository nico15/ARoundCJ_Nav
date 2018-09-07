import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


export default class LocationScreen extends React.Component {
   render() {
    const { image, name, desc } = this.props.navigation.state.params;
 
        return (
          <ScrollView>
            <Tile
              imageSrc={{ uri: image}}
            />
              <View>
               <Text>{name}</Text>
               <Text>{desc}</Text>

              </View>
          </ScrollView>
        )
      
    }
  }