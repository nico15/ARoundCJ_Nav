import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import TourScreen from '../screens/TourScreen';
import LocationScreen from '../screens/LocationScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});


const TourStack = createStackNavigator({
    Tour: TourScreen,
    Location: LocationScreen
});


export default createBottomTabNavigator({
    HomeStack,
    TourStack
});