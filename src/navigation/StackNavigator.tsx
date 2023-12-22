import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import TrueFalseScreen from '../screens/True-False';
import SplashScreen from '../screens/Splash';

const Stack = createStackNavigator();
export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"SplashScreen"} component={SplashScreen} />
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"truefalse"} component={TrueFalseScreen} />
    </Stack.Navigator>
  );
}
