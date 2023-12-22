/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrueFalseScreen from './src/screens/True-False';

AppRegistry.registerComponent(appName, () => App);
