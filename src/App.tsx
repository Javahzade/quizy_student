import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './navigation/RootNavigation';
export function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}
export default App;
