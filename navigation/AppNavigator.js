import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import LoadingScreen from "../screens/HomeScreen";
import  Tour  from "../screens/TourScreen";
import { LocationScreen } from "../screens/LocationScreen";


const HomeStack = createStackNavigator({
        Home: HomeScreen,
        Tour: Tour, 
        Location: LocationScreen
      }, {headerMode: 'none'}
);
HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
  };
};

export default createBottomTabNavigator({
  Map: { screen: MapScreen,
    navigationOptions:{
    //  tabBarVisible: false,
      tabBarLabel: 'Map',
      tabBarIcon : ({tintColor}) =>(
        <Ionicons name="ios-map" size={24}/>
      )
    } },
  Home: {screen: HomeStack,
  navigationOptions:{
    tabBarLabel: 'Tiles',
    tabBarIcon : ({tintColor}) =>(
       <Ionicons name="ios-menu" size={24}/>
     )
   }
  }      
},
 {   //router config
  initialRouteName: 'Home',
  order: ['Map', 'Home'],
  style: {flexDirection: 'row'},
  //navigation for complete tab navigator
  navigationOptions:{
    tabBarVisible: true,
  },
  
}
);