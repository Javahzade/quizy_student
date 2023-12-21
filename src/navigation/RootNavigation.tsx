import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './StackNavigator';
import {AuthNavigator} from './AuthNavigator';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

export function RootNavigation() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onReady = (): void => {
    auth().onAuthStateChanged(user => {
      setUser(user);
    });
  };

  return (
    <NavigationContainer onReady={onReady}>
      {user ? <StackNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
