// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import {Provider} from 'react-redux'
import moduleName from './app/redux/store'
import AppNavigator from './app/navigation/AppNavigator'
import store from './app/redux/store'

export default function App() {

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
    
  );
}

