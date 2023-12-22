import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigation} from './navigation/RootNavigation';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
export default App;
