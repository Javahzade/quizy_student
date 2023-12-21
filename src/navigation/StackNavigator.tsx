import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import truefalse from '../screens/True-False';

const Stack = createStackNavigator();
export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="truefalse" component={truefalse} />
    </Stack.Navigator>
  );
}
