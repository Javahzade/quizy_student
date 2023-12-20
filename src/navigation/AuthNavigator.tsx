import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SignIn} from '../screens/Auth/SignIn';
import {SignUp} from '../screens/Auth/SignUp';

const Stack = createStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
