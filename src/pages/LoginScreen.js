import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import login from '../API/ValidaLogin';



function LoginScreen(props) {
  const [ email, setEmail ] = useState('');

  const handlerClick = () => {
    props.navigation.navigate('Cadastro');
  }

  const isLoginValid = () => email != '';

  const validacaoLogin = async () => {
    if(!isLoginValid()){
      return alert("Preencha os campos obrigatórios!");
    }
    login(email)
      .then(resp => {       
          return AsyncStorage.setItem('data_user', JSON.stringify(resp));
        })
        .then(() => {
          props.navigation.push('Tarefas')
        })
        .catch(err => alert('Erro. ', err.message));
  }

  return (
      <View style={styles.container}>   
        <Text style={styles.texto}>E-mail:</Text>      
        <TextInput 
          value={email}
          onChangeText={email => { setEmail(email) }}
          style={styles.input}
        />
        <TouchableOpacity style={styles.botao} onPress={validacaoLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.botaoCadastrar} onPress={handlerClick}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>     
      </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
  },
  input: {
    width: 350,
    height: 40,
    fontSize: 18,
    backgroundColor: '#CCCCCC',
    marginBottom: 50,
    marginTop: 10,
    borderRadius: 5,
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#696969',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  botaoCadastrar: {
    width: 150,
    height: 50,
    backgroundColor: '#333333',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  textoBotao: {
    fontSize: 18,
    color: '#FFFFFF',
  }
})