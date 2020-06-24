import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import CadastroScreen from '../pages/CadastroScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Cadastro" component={CadastroScreen} />
        </MainStack.Navigator>
    );
}