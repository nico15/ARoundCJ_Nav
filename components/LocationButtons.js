import React, {Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';

import { locations } from '../assets/data';

class LocationButtons extends Component {
    render() {
        return (
            
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <View 
                    style={{flex: 1, flexDirection: 'row',marginTop: 35}}
                >     
                    <Image source={require('../assets/images/AR_View.png')} />
                    <Image source={require('../assets/images/Directions.png')} style={{marginLeft:10}}/>
                </View>
                <Image source={require('../assets/images/NextSight.png')} 
                      // onPress={props.viewLocation.key} 
                />
            </View>
            
        )
    }
}

const styles = {
    containerStyle: {
        height: 150,
        width: '100%',
        marginTop: 20
    },
    buttonStyle:{
        clear: true
    }
}

export default LocationButtons;