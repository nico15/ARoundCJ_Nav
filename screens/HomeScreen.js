import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, ImageBackground, Image} from 'react-native';
import { Header, Tile, List, ListItem } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';


import  {tours}  from '../assets/data';

const Tour = (props) => (
    <View>
        <TouchableHighlight onPress={props.viewTour}>
            <ImageBackground
                source={props.image}
                style={{width: '100%', height: 100}}
            >
                <View 
                    style={{marginLeft:20, marginTop:15, flexDirection: 'row'}}
                >     
                    <Text style={{color:'white', fontSize: 30, marginRight:15}}>{props.name}</Text>
                    <Image source={require('../assets/images/Checkmark_Icon.png')} style={{marginTop:10}}/>
                </View>

                <View style={{marginLeft:20, flex: 1, flexDirection: 'row'}} >
                    <Image source={require('../assets/images/TourTime_icon-1.png')} style={{}}/>
                        <Text style={{ color:'white', marginLeft:3, marginTop:8}}>{props.duration}</Text>
                    <Image source={require('../assets/images/TourLength_icon-1.png')} style={{}}/>               
                        <Text style={{ color:'white', marginLeft:-20, marginTop:8}}>{props.distance}</Text>
                </View> 
            </ImageBackground>
        </TouchableHighlight>
    </View>
);

export default class HomeScreen extends React.Component {
  viewTour = (tour) => {
    this.props.navigation.navigate('Tour', tour);
  };

  render() {
     console.log('props:', this.props);
     console.log("Hoooooooooooome", this.props.screenProps);
    return (
        <View  style={{ flex: 1}}>
        <View style={{ flex: 1, justifyContent:'center', backgroundColor: '#000'}}>
            <Header 
                backgroundColor={'#000'}
                centerComponent={{ text: 'Select Tour', style: { color: '#fff' }}}
            /> 
                 
            <FlatList
                data={tours}
                renderItem={({item}) => (
                    <Tour
                        viewTour={ this.viewTour.bind(this, item) }
                        name={item.name}
                        image={item.image}
                        duration={item.duration}
                        distance={item.distance}
                    />
                )}               
            />
            </View>
      </View>
    );
  }
}