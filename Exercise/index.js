/**
 * @format
 */

import App from './App';
import Dashboard from './src/Dashboard';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';

AppRegistry.registerComponent(appName, () => Dashboard);
