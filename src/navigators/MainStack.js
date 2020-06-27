import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import TarefasScreen from '../pages/TarefasScreen';
import CadastroScreen from '../pages/CadastroScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>      
            <MainStack.Screen name="Tarefas" component={TarefasScreen} options={{
                title: 'To Do List',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#000000',
                },
                headerTitleStyle:{
                    color: '#FFF',
                    fontSize: 22,
                    fontWeight: 'bold'
                }
            }} />     
            <MainStack.Screen name="Login" component={LoginScreen} options={{
                 headerTitleAlign: 'center',
                 headerStyle: {
                     backgroundColor: '#000000',
                 },
                 headerTitleStyle:{
                     color: '#FFF',
                     fontSize: 22,
                     fontWeight: 'bold'
                 }
            }} />                         
            <MainStack.Screen name="Cadastro" component={CadastroScreen} options={{
                 headerTitleAlign: 'center',
                 headerStyle: {
                     backgroundColor: '#000000',
                 },
                 headerTitleStyle:{
                     color: '#FFF',
                     fontSize: 22,
                     fontWeight: 'bold'
                 }
            }}/>                       
        </MainStack.Navigator>
    );
}