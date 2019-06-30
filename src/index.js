import { AppRegistry } from 'react-native';
import App from './App'

AppRegistry.registerComponent('parser', () => App);
AppRegistry.runApplication('parser', { rootTag: document.getElementById('app') });