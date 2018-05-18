import React from 'react';
import { View, Text,Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

// TabNavigator is deprecated.
// Please use the createBottomTabNavigator
// or createMaterialTopTabNavigator instead.

const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);

const RootTabs = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
},{
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});

export default RootTabs;