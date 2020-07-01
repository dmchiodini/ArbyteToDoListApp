import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import cadastrar from '../API/ValidaCadastro';


function CadastroScreen(props) {
  const [ nome, setNome ] = useState('');
  const [ email, setEmail ] = useState('');

  const isValid = () => nome != '' && email != '';

  const chamarCadastro = () => {
    if(!isValid()) {
      return alert("Preencha os campos obrigatórios!");
    }
    cadastrar(nome, email)
      .then(() => {
        props.navigation.navigate('Login');
      })
      .catch(err => alert('Não foi possível cadastrar! ', err.message));
  }

  return (
    <View style={styles.container}>   
      <Text style={styles.texto}>Nome:</Text>      
      <TextInput 
        value={nome}
        onChangeText={nome => { setNome(nome) }}
        style={styles.input}
      />
      <Text style={styles.texto}>E-mail:</Text>      
      <TextInput 
        value={email}
        onChangeText={email => { setEmail(email) }}
        style={styles.input}
      />
      <TouchableOpacity style={styles.botaoCadastrar} onPress={chamarCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>     
  </View>
  );
};

export default CadastroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#d7dcf9'
  },
  texto: {
    fontSize: 20,
    color: '#414b6e',
    fontWeight: 'bold'
  },
  input: {
    width: 350,
    height: 40,
    fontSize: 18,
    color: '#414b6e',
    backgroundColor: '#FFF',
    marginBottom: 50,
    marginTop: 10,
    borderRadius: 5,
  },
  botaoCadastrar: {
    width: 150,
    height: 50,
    backgroundColor: '#414b6e',
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