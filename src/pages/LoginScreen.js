import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Page = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center; 
`;
const Input = styled.TextInput`
  width: 60%;
  height: 50px;
  font-size: 18px;
  background-color: #CCCCCC;
  margin-bottom: 20px;
  margin-top: 10px;
  borderRadius: 5px;
`;
const Botao = styled.TouchableOpacity`
  width: 20%;
  background-color: #696969;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
  borderRadius: 5px;
  margin-bottom: 20px;
`;
const BotaoTexto = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
`;
const Texto = styled.Text`
  font-size: 20px;
`;

function LoginScreen() {

  const navigation = useNavigation();

  const handlerClick = () => {
    navigation.navigate('Cadastro');
  }

  return (
      <Page>   
        <Texto>E-mail:</Texto>      
        <Input />
        <Botao>
          <BotaoTexto>Entrar</BotaoTexto>
        </Botao> 
        <Botao onPress={handlerClick}>
          <BotaoTexto>Cadastrar</BotaoTexto>
        </Botao>     
      </Page>
  );
};

export default LoginScreen;