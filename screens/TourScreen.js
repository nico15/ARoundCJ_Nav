import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import { Tile, List, ListItem, Header } from 'react-native-elements';

import { locations } from '../assets/data';

export default class Tour extends React.Component {
    // componentDidMount() {
    //     console.log("AAAAAAAAAAAAAAAAAAA", this.props.navigation);
    // }

    viewLocation = (location) => {
        this.props.navigation.navigate('Location', location);
    }

    getParams() {
        return this.props.navigation && this.props.navigation.state && this.props.navigation.state.params ?
            this.props.navigation.state.params
            :
            {}
    }
    
    render() {
        console.log("Toooooooooour", this.props.navigation.state.params);
        const { name, image, desc } = this.getParams();

        return (
            <ScrollView style={{ flex: 1}}>
                <ImageBackground
                    source={image}
                    style={{width: '100%', height: 260}}
                />
                    <View style={{  backgroundColor: '#000'}}>
                        <Text style={{ color:'white', fontSize: 25}}>{name}</Text>
                        <Text style={{ color:'white', fontSize: 25}}>{desc}</Text>
                        <List>
                            {
                                locations[name] && locations[name].map((location,index) => (
                                    <ListItem
                                        key={location.key}
                                        title={`${index + 1}. ${location.name}`}
                                        onPress={() => this.viewLocation(location)}                
                                    />
                                ))
                            }
                        </List>
                    </View>
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    TourContainer:{
        color: '#000'
    }

})