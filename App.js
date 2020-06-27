
import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

function App() {
  return (  
    <Provider store={Store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;