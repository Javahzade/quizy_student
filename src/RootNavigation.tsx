import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
export function RootNavigation(){
    const Stack=createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
    )
}