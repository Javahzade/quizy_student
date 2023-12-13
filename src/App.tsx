import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './RootNavigation';
export function App() {

    return (
        <NavigationContainer>
          <RootNavigation/>
        </NavigationContainer>
    );
}
export default App;