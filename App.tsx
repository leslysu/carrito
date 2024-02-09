import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {  View } from 'react-native'
import { StackNavigator } from './src/navigator/StackNavigator';
import { LoginScreen } from './src/screens/LoginScreens';

const App = () => {
  return (
    <NavigationContainer>
        <StackNavigator/>
        <LoginScreen/>
    </NavigationContainer>
  )
}

export default App;
