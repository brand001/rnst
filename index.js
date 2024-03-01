/**
 * @format
 */

// import 'node-libs-react-native-buffer4/globals';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;
