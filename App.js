
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/componentes/Header'
import LoginScreen from './src/pages/LoginScreen';

const Stack = createStackNavigator();


function App() {
  return (    
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouterName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;