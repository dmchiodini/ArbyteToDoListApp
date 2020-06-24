
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './src/navigators/MainStack';

import Header from './src/componentes/Header'

const Stack = createStackNavigator();


function App() {
  return (    
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;