/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import HomeScreen from './src/screens/Home';

AppRegistry.registerComponent(appName, () => HomeScreen);
