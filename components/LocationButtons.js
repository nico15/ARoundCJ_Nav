import React, {Component } from 'react';
import { StyleSheet, View, Image,TouchableWithoutFeedback} from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';


class LocationButtons extends Component {
    navigateNext = () => {
        const nextKey = Number(this.props.index) + 1;
        const location = this.props.locations.find(location => location.key == nextKey);      
        this.props.navigate('Location', {
            location,
            locations : this.props.locations
        })
    }

    render() {
        const {key, locations} = this.props;

        return (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <View 
              style={{flex: 1, flexDirection: 'row',marginTop: 35}}>     
              <Image source={require('../assets/images/AR_View.png')} />
              <Image source={require('../assets/images/Directions.png')} style={{marginLeft:10}}/>
            </View>
            <TouchableWithoutFeedback onPress={this.navigateNext}>
              <Image source={require('../assets/images/NextSight.png')} />
            </TouchableWithoutFeedback>

        </View>
            
        )
    }
}

export default LocationButtons;