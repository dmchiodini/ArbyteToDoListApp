import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from './src/reducers/userReducer'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

let store = createStore(userReducer)

function App() {
  return (  
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;