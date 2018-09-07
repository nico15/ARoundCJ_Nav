import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


import { locations } from '../assets/data';

export default class Locations extends React.Component {
    viewLocation = (location) => {
        this.props.navigation.navigate('Location', { ...location });
    };

    render() {
        console.log('props:', this.props)
      return (
        <ScrollView>
        <List>
          {
              locations.map((location) => (
                <ListItem
                        key={location.key}
                        title={location.name}
                        onPress={() => this.viewLocation(location)}                
                />
              ))
          }
        </List>
        </ScrollView>
      );
    }
}