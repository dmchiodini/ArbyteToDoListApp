import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import TarefasScreen from '../pages/TarefasScreen';
import CadastroScreen from '../pages/CadastroScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#414b6e',
            },
            headerTitleStyle:{
                color: '#FFF',
                fontSize: 22,
                fontWeight: 'bold'
            }
        }}>      
            <MainStack.Screen name="Tarefas" component={TarefasScreen} options={{title: 'To Do List'}} />     
            <MainStack.Screen name="Login" component={LoginScreen}/>                         
            <MainStack.Screen name="Cadastro" component={CadastroScreen}/>                       
        </MainStack.Navigator>
    );
}