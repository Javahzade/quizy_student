import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {StackNavigator} from './StackNavigator';
export function RootNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
