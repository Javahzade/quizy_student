import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {Categories} from '../screens/Home/Categories';

const Stack = createStackNavigator();
export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}
