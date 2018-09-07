import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

import { tours } from '../assets/data';


export default class HomeScreen extends React.Component {
  viewTour = (tour) => {
      this.props.navigation.navigate('Tour', { ...tour });
  };

  render() {
    return (
      <ScrollView>
        <Tile
              imageSrc={{ uri: tour.image}}
        />
          <List>
          {
            tours.map((tour) => (
              <ListItem
                      key={tour.key}
                      title={tour.name}
                      onPress={() => this.viewTour(tour)}                
              />
            ))
          }
          </List>
      </ScrollView>
    );
  }
}