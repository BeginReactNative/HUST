


import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import configStore from './src/configureStore';  //This is store <<<<<<<<
import App from './App';

const store = configStore();
const HUST_APP = () => {
  <Provider store={store}>
    <App />
  </Provider>
}
AppRegistry.registerComponent('HUST', () => HUST_APP);
